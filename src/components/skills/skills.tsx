import React from "react";

const Skills: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div>
      <h1>skills</h1>
      <ul>
        {skills.map((i) => (
          <li key={i}>i</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
