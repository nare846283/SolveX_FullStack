import React, { useState } from "react";
import CodeEditor from "./CodeEditor";

const QuestionSolution = ({ question }) => {
  const [language, setLanguage] = useState("javascript");

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-2">🚀 {question.title}</h2>
      <p className="text-gray-700 text-lg">{question.description}</p>

      <h3 className="mt-4 text-xl font-semibold">📌 Problem Statement:</h3>
      <p>{question.problemStatement}</p>

      <h3 className="mt-4 text-xl font-semibold">🔹 Algorithm:</h3>
      <ul className="list-disc pl-6 space-y-1">
        {question.algorithm.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      {question.solution.methods.map((method, idx) => (
        <div key={idx} className="mt-6">
          <h3 className="text-xl font-semibold">📌 {method.method}</h3>
          <p className="text-gray-700">{method.approach.join(" ")}</p>

          <h3 className="mt-4 text-xl font-semibold">📜 Code:</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
            <code>{method.code}</code>
          </pre>

          <h3 className="mt-4 text-xl font-semibold">📌 Code Explanation:</h3>
          <ul className="list-disc pl-6 space-y-1">
            {method.explanation.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Language Selector */}
      <h3 className="mt-4 text-xl font-semibold">🌎 Select Language:</h3>
      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="border border-gray-400 p-2 rounded-md mt-2"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
      </select>

      {/* Code Editor */}
      <CodeEditor language={language} />
    </div>
  );
};

export default QuestionSolution;
