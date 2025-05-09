import mongoose, { Document, Schema } from "mongoose";

export interface ICompany extends Document {
  name: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  manager: mongoose.Types.ObjectId;
  shops: mongoose.Types.ObjectId[];
  totalBoxes: number;
  activeFamilies: number;
  createdAt: Date;
  updatedAt: Date;
}

const companySchema = new Schema<ICompany>(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
      required: true,
    },
    manager: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shops: [
      {
        type: Schema.Types.ObjectId,
        ref: "Shop",
      },
    ],
    totalBoxes: {
      type: Number,
      default: 0,
    },
    activeFamilies: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model<ICompany>("Company", companySchema);

export default Company;
