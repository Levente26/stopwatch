import back from "../../../assets/back.png";
import { useTheme } from "../../../hooks/useTheme";

const BackButton = (props) => {
  const { theme } = useTheme();

  return (
    <button {...props} className="stopper-btn font-md">
      <img
        src={back}
        alt="back"
        style={{ filter: theme === "dark" ? "invert(100%)" : "invert(20%)" }}
        className="stopper-btn"
      />
    </button>
  );
};
export default BackButton;
