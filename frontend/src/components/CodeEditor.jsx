import React, { useState, useEffect } from "react";
// import { Controlled as CodeMirror } from "react-codemirror2";
import io from "socket.io-client";
import AIAnalysis from "./AIAnalysis"; // Import AI Analysis Component
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";

const socket = io("http://localhost:5000");

const CodeEditor = ({ roomId }) => {
  const [code, setCode] = useState("// Start coding...");

  useEffect(() => {
    socket.emit("join-room", roomId);

    socket.on("receive-code", (newCode) => {
      setCode(newCode);
    });

    return () => socket.off("receive-code");
  }, [roomId]);

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
    socket.emit("code-change", { roomId, code: value });
  };

  return (
    <div className="w-full h-[500px] border rounded-md shadow-lg p-4">
      <CodeMirror
        value={code}
        options={{
          mode: "javascript",
          theme: "dracula",
          lineNumbers: true,
        }}
        onBeforeChange={handleCodeChange}
      />
      <AIAnalysis code={code} />
    </div>
  );
};

export default CodeEditor;
