import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import QuestionSolution from "../components/QuestionSolution";

const Easy = () => {
  const questions = [
    {
      title: "Find the Largest Digit",
      description: "Find the largest digit in a given number.",
      problemStatement: "Hume ek given number ke sabse bada digit dhoondhna hai.",
      algorithm: [
        "User se input lo.",
        "Last digit extract karo using % 10.",
        "Largest digit ko track karne ke liye ek variable use karo.",
        "Har digit ko compare karke update karo.",
        "Final largest digit print karo.",
      ],
      solution: {
        methods: [
          {
            method: "Using While Loop",
            approach: [
              "Number se last digit extract karenge (% 10).",
              "Max digit ko track karenge aur compare karenge.",
              "Har iteration me last digit remove karenge (num / 10).",
            ],
            code: `function findLargestDigit(num) {
    let maxDigit = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit > maxDigit) maxDigit = digit;
        num = Math.floor(num / 10);
    }
    return maxDigit;
}
console.log(findLargestDigit(54892)); // Output: 9`,
            explanation: [
              "Input number se last digit extract karo.",
              "Agar digit max se bada hai toh update karo.",
              "Har iteration me last digit remove karo.",
              "Loop jab tak chalta hai jab tak number 0 nahi hota.",
              "Finally, max digit return hota hai.",
            ],
          },
        ],
      },
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  return (
    <div className="flex">
      <Sidebar />
      <QuestionSolution question={selectedQuestion} />
    </div>
  );
};

export default Easy;
