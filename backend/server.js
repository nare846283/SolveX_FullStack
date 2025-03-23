const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const xpRoutes = require("./routes/xpRoutes");

const app = express();
const server = http.createServer(app);

app.use(cors());

app.use(express.json());

app.use("/api/xp", xpRoutes);

const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen for code updates
  socket.on("code-change", ({ roomId, code }) => {
    socket.to(roomId).emit("receive-code", code);
  });

  // Join a specific room
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
