import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import NavModal from "./NavModal";


function NavList() {
    return (
        <ul className="nav__list gap-5">
            <li className="nav__item">
                <NavLink to="/" className="fs-6 fw-normal nav__item--link">
                    Home
                </NavLink>
            </li>
            <li className="nav__item">
                <NavLink
                    to="/contacts"
                    className="fs-6 fw-normal nav__item--link"
                >
                    Contacts
                </NavLink>
            </li>
            <li className="nav__item">
                <NavLink
                    to="/about"
                    className="fs-6 fw-normal nav__item--link"
                >
                    About
                </NavLink>
            </li>
            <li className="nav__item">
                <NavLink
                    to="/services"
                    className="fs-6 fw-normal nav__item--link"
                >
                    Services
                </NavLink>
            </li>
        </ul>
    )
}

function NavSocial() {
    return (
        <ul className="nav__list--social gap-2">
            <li className="nav__item">
                <Link 
                    to="/" 
                    className="fs-4 nav__item--link"
                >
                    <FaGithub />
                </Link>
            </li>
            <li className="nav__item">
                <Link 
                    to="/" 
                    className="fs-4 nav__item--link"
                >
                    <FaInstagram />
                </Link>
            </li>
            <li className="nav__item">
                <Link 
                    to="/" 
                    className="fs-4 nav__item--link"
                >
                    <FaTelegram />
                </Link>
            </li>
        </ul>
    )
}

function Nav() {
    return (
        <nav className="nav gap-5">
            <NavList />
            <NavSocial />
            <NavModal />
        </nav>
    );
}
export { Nav, NavList, NavSocial };
