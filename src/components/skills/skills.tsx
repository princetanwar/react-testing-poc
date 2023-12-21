import React, { useEffect, useState } from "react";

const Skills: React.FC<{ skills: string[] }> = ({ skills }) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogin(true);
    }, 500);
  }, []);
  return (
    <div>
      <h1>skills</h1>
      <ul>
        {skills.map((i) => (
          <li key={i}>i</li>
        ))}
      </ul>

      {login ? (
        <button>start learning</button>
      ) : (
        <button onClick={() => setLogin(true)}>login</button>
      )}
    </div>
  );
};

export default Skills;
