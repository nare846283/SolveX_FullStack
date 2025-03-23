import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AIAnalysis = ({ code }) => {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeCode = async () => {
    if (!code.trim()) {
      toast.error("Please write some code first!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5001/analyze-code", { code });
      setAnalysis(res.data.analysis);
      toast.success("Code analyzed successfully!");
    } catch (error) {
      toast.error("Error analyzing code!");
    }
    setLoading(false);
  };

  return (
    <div className="mt-4">
      <button
        onClick={analyzeCode}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
      >
        {loading ? "Analyzing..." : "Analyze Code"}
      </button>

      {analysis && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold">AI Suggestions:</h3>
          <pre className="whitespace-pre-wrap">{analysis}</pre>
        </div>
      )}
    </div>
  );
};

export default AIAnalysis;
