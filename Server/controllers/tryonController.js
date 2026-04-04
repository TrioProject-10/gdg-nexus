import axios from "axios";

export const tryOn = async (req, res) => {
  try {
    const response = await axios.post(
      process.env.AI_URL + "/tryon",
      req.body
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "AI service failed" });
  }
};