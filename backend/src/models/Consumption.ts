import mongoose, { Document, Schema } from "mongoose";

export interface IConsumption extends Document {
  month: string;
  value: number;
  company?: mongoose.Types.ObjectId;
  shop?: mongoose.Types.ObjectId;
  family?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const consumptionSchema = new Schema<IConsumption>(
  {
    month: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
    },
    family: {
      type: Schema.Types.ObjectId,
      ref: "Family",
    },
  },
  {
    timestamps: true,
  }
);

const Consumption = mongoose.model<IConsumption>(
  "Consumption",
  consumptionSchema
);

export default Consumption;
