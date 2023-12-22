import "./App.css";
// import Application from "./components/Application";
import Profile from "./components/profile/profile";
import ThemeContext from "./context/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Profile />
    </ThemeContext.Provider>
  );
}

export default App;
