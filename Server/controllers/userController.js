import { db } from "../config/firebase.js";

export const getProfile = async (req, res) => {
  const user = await db.collection("users").doc(req.user.id).get();
  res.json(user.data());
};

export const updateProfile = async (req, res) => {
  await db.collection("users").doc(req.user.id).update(req.body);
  res.json({ message: "Profile updated" });
};