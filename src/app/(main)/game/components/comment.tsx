"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import ItemUser from "./item-user";
import { useEffect, useState } from "react";
import useGame from "@/store/useGame";

export function CommentGame() {
  const { currentGame } = useGame();
  const [responseData, setResponseData] = useState([]); // Trạng thái lưu kết quả từ API
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    terms: false,
  });
  const handleInputChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };
  const handleEmailChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };
  const handleTextChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      comment: e.target.value,
    }));
  };
  const handleCheckBoxChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      terms: e,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formData.terms) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
      handlComment(formData);
    } else {
      alert("You must agree to the terms and conditions to submit.");
    }
  };

  useEffect(() => {
    // Nếu `currentGame` tồn tại, gọi API để lấy đánh giá
    if (currentGame?.name) {
      const fetchGameRating = async () => {
        try {
          const response = await fetch(`/api/rating?game=${currentGame.slug}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch rating");
          }
          const data = await response.json();
          console.log(data.data);
          setResponseData(data.data); // Lưu kết quả vào state
        } catch (error) {
          console.error("Error fetching rating:", error);
        }
      };

      fetchGameRating();
    }
  }, [currentGame]);
  const handlComment = async (CommentGame: any) => {
    const response = await fetch("/api/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: CommentGame.email,
        comment: CommentGame.comment,
        game: currentGame.slug,
      }),
    });
    // const data = await response.json();
    // console.log(data);
  };
  console.log(responseData);
  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">Comment</CardTitle>
        </CardHeader>
        <ScrollArea className="h-[400px] w-full p-[24px]">
          <ul>
            {responseData.map((comment: any, index) => (
              <ItemUser key={index} comment={comment}></ItemUser>
            ))}
          </ul>
        </ScrollArea>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleEmailChange}
                />
              </div>
              <Textarea
                id="comment"
                name="comment"
                placeholder="Add comment"
                value={formData.comment}
                onChange={handleTextChange}
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onCheckedChange={handleCheckBoxChange}
                />
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I&apos;d read and agree to the terms and conditions.
                </Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div></div>
          <Button
            type="submit"
            className={`px-4 py-2 rounded ${
              formData.terms
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!formData.terms} // Disable button nếu checkbox chưa được chọn
            onClick={handleSubmit}
          >
            Comment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
