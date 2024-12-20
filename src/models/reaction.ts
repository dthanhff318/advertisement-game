import mongoose, { Schema, Document } from "mongoose";

export interface IReaction extends Document {
  ipAddress: string;
  email: string;
  comment: string;
  rate: number;
  game: string;
  createdAt: Date;
}

const ReactionSchema: Schema = new Schema(
  {
    ipAddress: { type: String },
    email: { type: String },
    rate: { type: Number },
    comment: { type: String },
    game: { type: String },
  },
  { timestamps: true }
);

const reactionModel =
  mongoose.models.Reaction ||
  mongoose.model<IReaction>("Reaction", ReactionSchema);

export default reactionModel;
