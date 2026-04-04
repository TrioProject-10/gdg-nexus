import { db } from "../config/firebase.js";

export const getAllProducts = async (req, res) => {
  const snapshot = await db.collection("products").get();

  const products = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  res.json(products);
};

export const getProduct = async (req, res) => {
  const doc = await db.collection("products").doc(req.params.id).get();
  res.json(doc.data());
};