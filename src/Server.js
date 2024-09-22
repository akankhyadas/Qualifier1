const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, message: "Invalid input" });
  }

  const user_id = "gp5901";
  const email = "gp5901@srmist.edu.in";
  const roll_number = "RA2111004020056";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
  const highest_alphabet = alphabets.length
    ? [
        alphabets
          .sort((a, b) =>
            a.localeCompare(b, undefined, { sensitivity: "base" })
          )
          .pop(),
      ]
    : [];

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});