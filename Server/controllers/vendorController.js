import { db } from "../config/firebase.js";

export const addProduct = async (req, res) => {
  const { name, price, image, category } = req.body;

  const productRef = db.collection("products").doc();

  await productRef.set({
    name,
    price,
    image,
    category,
    vendorId: req.user.id,
  });

  res.json({ message: "Product added" });
};

export const getVendorProducts = async (req, res) => {
  const snapshot = await db.collection("products")
    .where("vendorId", "==", req.user.id).get();

  const products = snapshot.docs.map(doc => doc.data());

  res.json(products);
};.