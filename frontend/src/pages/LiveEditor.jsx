import React, { useState } from "react";
import CodeEditor from "../components/CodeEditor";

const LiveEditor = () => {
  const [roomId, setRoomId] = useState("");

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Live Coding Collaboration + AI</h2>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        className="px-4 py-2 border rounded-md mb-4"
      />
      {roomId && <CodeEditor roomId={roomId} />}
    </div>
  );
};

export default LiveEditor;
