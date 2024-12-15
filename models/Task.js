const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Overdue"],
      default: "Pending",
    },
    dueDate: { type: Date },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

TaskSchema.pre("save", function (next) {
  if (this.dueDate && this.dueDate < new Date()) {
    this.status = "Overdue";
  }
  next();
});

module.exports = mongoose.model("Task", TaskSchema);
