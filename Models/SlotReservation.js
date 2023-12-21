import mongoose from "mongoose";
const reservationData = new mongoose.Schema({
  id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  slotDate: {
    type: String,
    required: true
  },
  slotTime: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
    required: true
  },
  requestStatus: {
    type: String,
    required: true
  },
  requestCreationDate: {
    type: String,
    required: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const Reservation = mongoose.model("reservarions", reservationData);

export default Reservation;
