import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import hourGif from "../../assets/giphy.gif";

const Sidebar = () => {
  const { user } = useAuthContext();

  return (
    <aside>
      <div className="user">
        <p className="mt-1">Hey {user.displayName}</p>
      </div>
      <ul>
        <li>
          <Link to="/" className="d-f">
            My Question
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="d-f">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/create" className="d-f">
            New Timer
          </Link>
        </li>
      </ul>
      <img className="gif" src={hourGif} alt="gif" />
    </aside>
  );
};
export default Sidebar;
