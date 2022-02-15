import play from "../../../assets/play.png";

const StartButton = (props) => {
  return (
    <button {...props} className="stopper-btn font-md">
      <img src={play} alt="back" className="stopper-btn" />
    </button>
  );
};
export default StartButton;
