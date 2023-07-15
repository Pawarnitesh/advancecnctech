const express = require("express");
const sendEmail = require("./sendEmail");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 8080;
app.post("/send-email", async (req, res) => {
  console.log(req.body);
  let { name, email, subject, text } = req.body;
  sendEmail(name, email, subject, text);
  res.send("Email sent success...");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
