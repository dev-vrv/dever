import "./Logo.scss";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/" className="text-white text-decoration-none fs-4 fw-normal">
           Dever.
        </Link>
    );
}

export default Logo;
