import pause from "../../../assets/pause.png";

const StopButton = (props) => {
  return (
    <button {...props} className="stopper-btn font-md">
      <img src={pause} alt="back" className="stopper-btn" />
    </button>
  );
};
export default StopButton;
