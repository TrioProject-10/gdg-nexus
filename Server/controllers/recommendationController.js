import axios from "axios";

export const recommend = async (req, res) => {
  try {
    const response = await axios.post(
      process.env.AI_URL + "/recommend",
      req.body
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Recommendation failed" });
  }
};.