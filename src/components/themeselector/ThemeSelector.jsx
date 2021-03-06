import "./ThemeSelector.scss";
import { useTheme } from "../../hooks/useTheme";
import ModeSwitch from "../../assets/mode-switch.svg";

const ThemeSelector = () => {
  const { changeTheme, theme } = useTheme();

  const toggleMode = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`${theme} pt-1`}>
      <div>
        <img
          src={ModeSwitch}
          alt="light/dark toggle icon"
          onClick={toggleMode}
          className="modeimg"
          style={{ filter: theme === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
    </div>
  );
};
export default ThemeSelector;
