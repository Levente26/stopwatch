import work from "../../../assets/work.png";

const SettingsButton = (props) => {
  return (
    <button {...props} className="stopper-btn font-md">
      <img src={work} alt="back" className="stopper-btn" />
    </button>
  );
};
export default SettingsButton;
