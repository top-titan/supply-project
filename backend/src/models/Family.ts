import mongoose, { Document, Schema } from "mongoose";

export interface IFamily extends Document {
  name: string;
  address: string;
  members: mongoose.Types.ObjectId[];
  currentBoxes: number;
  nextDeliveryDate: Date;
  alerts: number;
  usageTrend: number;
  createdAt: Date;
  updatedAt: Date;
}

const familySchema = new Schema<IFamily>(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    currentBoxes: {
      type: Number,
      default: 0,
    },
    nextDeliveryDate: {
      type: Date,
    },
    alerts: {
      type: Number,
      default: 0,
    },
    usageTrend: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Family = mongoose.model<IFamily>("Family", familySchema);

export default Family;
