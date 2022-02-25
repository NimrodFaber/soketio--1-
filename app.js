const express = require("express"),
  socketIO = require("socket.io"),
  mongoose = require("mongoose"),
  app = express(),
  { saveMassege } = require("./controller/massegecontroller"),
  port = 3000;

app.use(express.static("public"));

mongoose
  .connect("mongodb://0.0.0.0:27017/hacker-chat")
  .then(() => {
    const server = app.listen(port, () => console.info(`port ${port}`));
    const io = socketIO(server);
    io.on("connection", (socket) => {
      socket.on("massege-sent", (massege) => {
        saveMassege(massege.massege).then((message) => {
          io.emit("message-recived", message);
        });
      });
    });
  })
  .catch((err) => console.error(err));
