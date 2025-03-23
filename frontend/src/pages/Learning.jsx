import React from "react";

const Learning = () => {
  const languages = ["HTML", "CSS", "JavaScript", "Python", "C++", "Java", "PHP"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">📚 SolveX Learning Section</h1>
      <p className="text-lg text-gray-600">
        Explore programming languages and concepts with interactive examples.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="bg-blue-100 p-4 rounded-md hover:bg-blue-300 transition-all"
          >
            <h3 className="text-xl font-bold">{lang}</h3>
            <p>Learn the fundamentals of {lang} with examples.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
