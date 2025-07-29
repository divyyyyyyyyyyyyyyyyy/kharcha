const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  socket.on("play", () => socket.broadcast.emit("play"));
  socket.on("pause", () => socket.broadcast.emit("pause"));
  socket.on("seek", (time)
