const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const FULL_NAME = "deepbendu debnath"; 
const DOB = "25112003"; 
const EMAIL = "debnathdeepbendu@gmail.com";
const ROLL_NUMBER = "22BCE2309";

function processData(data) {
  const even = [];
  const odd = [];
  const alphabets = [];
  const special = [];
  let sum = 0;
  let alphaConcat = "";

  data.forEach((item) => {
    if (/^\d+$/.test(item)) {
      let num = parseInt(item, 10);
      sum += num;
      if (num % 2 === 0) {
        even.push(item.toString());
      } else {
        odd.push(item.toString());
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      alphaConcat += item;
    } else {
      special.push(item);
    }
  });


  let concatString = "";
  let toggle = true;
  alphaConcat = alphaConcat.split("").reverse().join("");
  for (let ch of alphaConcat) {
    concatString += toggle ? ch.toUpperCase() : ch.toLowerCase();
    toggle = !toggle;
  }

  return {
    is_success: true,
    user_id: `${FULL_NAME}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers: odd,
    even_numbers: even,
    alphabets,
    special_characters: special,
    sum: sum.toString(),
    concat_string: concatString,
  };
}

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input, expected { data: [...] }",
      });
    }
    const result = processData(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

