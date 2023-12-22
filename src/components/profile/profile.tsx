import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Profile: React.FC = () => {
  const currentTheme = useContext(ThemeContext);
  return (
    <div>
      <div>{currentTheme} theme</div>
    </div>
  );
};

export default Profile;
