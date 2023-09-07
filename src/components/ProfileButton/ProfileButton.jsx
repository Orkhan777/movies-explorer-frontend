import { Link } from "react-router-dom";
import "./ProfileButton.css";

function ProfileButton() {
  return (
    <Link to="/profile" className="account">
      Аккаунт
    </Link>
  );
}

export default ProfileButton;
