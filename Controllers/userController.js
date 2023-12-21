import Reservation from "../Models/SlotReservation.js";
import asyncHandler from "express-async-handler";

const bookSlot = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    address,
    mobile,
    slotDate,
    slotTime,
    paymentStatus,
    requestStatus,
    requestCreationDate
  } = req.body;

  const slotdetails = new Reservation({
    name: name,
    email: email,
    address: address,
    mobile: mobile,
    slotDate: slotDate,
    slotTime: slotTime,
    paymentStatus: paymentStatus,
    requestStatus: requestStatus,
    requestCreationDate: requestCreationDate
  });
  await slotdetails.save();
  res.json({
    status: 200,
    message: "Slot Booked Successfully"
  });
});

const getBooking = asyncHandler(async (req, res) => {
  const bookingData = await Reservation.find({});
  res.status(200).send(bookingData);
});

const updateBooking = asyncHandler(async (req, res) => {
  const {
    id,
    name,
    email,
    address,
    mobile,
    slotDate,
    slotTime,
    paymentStatus,
    requestStatus,
    requestCreationDate
  } = req.body;
  console.log(req.body);
  await Reservation.updateOne(
    { _id: id },
    {
      $set: {
        name: name,
        email: email,
        address: address,
        mobile: mobile,
        slotDate: slotDate,
        slotTime: slotTime,
        paymentStatus: paymentStatus,
        requestStatus: requestStatus,
        requestCreationDate: requestCreationDate
      }
    }
  );
  res.json({ status: 200, message: "Slot Updated Successfully" });
});
const deleteBooking = asyncHandler(async (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  await Reservation.deleteOne({ _id: id });
  res.json({ status: 200 });
});
export { bookSlot, getBooking, updateBooking, deleteBooking };
