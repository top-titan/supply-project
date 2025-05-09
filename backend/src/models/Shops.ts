import mongoose, { Document, Schema } from "mongoose";

export interface IShop extends Document {
  name: string;
  address: string;
  company: mongoose.Types.ObjectId;
  manager: mongoose.Types.ObjectId;
  inventory: number;
  activeCustomers: number;
  lowStockItems: number;
  createdAt: Date;
  updatedAt: Date;
}

const shopSchema = new Schema<IShop>(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    manager: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    inventory: {
      type: Number,
      default: 0,
    },
    activeCustomers: {
      type: Number,
      default: 0,
    },
    lowStockItems: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model<IShop>("Shop", shopSchema);

export default Shop;
