require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");

const PORT = process.env.PORT || 8000;

const app = express();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioClient = require("twilio")(accountSid, authToken);

app.use(cors());
app.use(express.json());
// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

// app.post("/", (req, res) => {
//   const {message, user: sender, type, members} = req.body;
//   if(type === "message.new") {
//     members. forEach(({user}) => {
//       if(!user.online) {
//         twilioClient.messages.create({
//           body: `You have a new message from ${message.user.fullName} - ${message.text}`,
//           messagingServiceSid
//         })
//       }
//     })
//   }
// })

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
