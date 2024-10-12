import mongoose from "mongoose";
import User from "../userController/userSchema";

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const preferredSkills = new Schema(
  {
    preferredSkill: {
      type: [
        {
          title: {
            type: [String],
            required: true,
          },
          user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);
export const Skill = mongoose.model("Skill", skillSchema);
export const PreferredSkill = mongoose.model("PreferredSkill", preferredSkills);
