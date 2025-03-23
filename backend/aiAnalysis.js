require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Add your OpenAI API key in .env
  })
);

app.post("/analyze-code", async (req, res) => {
  try {
    const { code } = req.body;

    const response = await openai.createChatCompletion({
      model: "gpt-4", // You can use "gpt-4" for better responses
      messages: [
        { role: "system", content: "You are an AI code reviewer. Analyze the given code, provide optimization tips, best practices, and highlight errors." },
        { role: "user", content: `Analyze the following code:\n\n${code}` }
      ],
    });

    res.json({ analysis: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Error analyzing code" });
  }
});

app.listen(5001, () => console.log("AI Analysis Server running on port 5001"));
