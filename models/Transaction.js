const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["inflow", "outflow"], required: true },
  amount: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", transactionSchema);



// const mongoose = require("mongoose");

// const transactionSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   type: { 
//     type: String, 
//     enum: ["deposit", "withdrawal", "transfer", "loan", "payment"], 
//     required: true 
//   },
//   status: { 
//     type: String, 
//     enum: ["pending", "completed", "failed", "cancelled"], 
//     default: "pending" 
//   },
//   amount: { type: Number, required: true },
//   description: { type: String },
//   reference: { type: String },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Transaction", transactionSchema);
