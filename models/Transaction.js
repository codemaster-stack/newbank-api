// const mongoose = require("mongoose");

// const transactionSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   type: { type: String, enum: ["inflow", "outflow"], required: true },
//   amount: { type: Number, required: true },
//   description: { type: String },
//   createdAt: { type: Date, default: Date.now }
// });


// module.exports = mongoose.model("Transaction", transactionSchema);



const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["inflow", "outflow"], required: true },
  accountType: { type: String, enum: ["savings", "current"], required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "completed" },
  description: String,
  reference: String
}, { timestamps: true });
