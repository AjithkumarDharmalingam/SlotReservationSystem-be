import express from "express";
import {
  bookSlot,
  deleteBooking,
  getBooking,
  updateBooking
} from "../Controllers/userController.js";

const router = express.Router();

router.post("/bookslot", bookSlot);
router.get("/getbookings", getBooking);
router.put("/updatebooking", updateBooking);
router.delete("/deletebooking", deleteBooking);

export default router;
