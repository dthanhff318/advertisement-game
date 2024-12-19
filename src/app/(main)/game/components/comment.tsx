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

export function CommentGame() {
  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">Comment</CardTitle>
        </CardHeader>
        <ScrollArea className="h-[400px] w-full p-[24px]">
          <ItemUser></ItemUser>
          <ItemUser></ItemUser>
          <ItemUser></ItemUser>
          <ItemUser></ItemUser>
          <ItemUser></ItemUser>
          <ItemUser></ItemUser>
          <ItemUser></ItemUser>
        </ScrollArea>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Email" />
              </div>
              <Textarea placeholder="Add comment" />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I&apos;d read and agree to the terms and conditions.
                </label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div></div>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
