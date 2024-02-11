import './Footer.scss'
import { Link } from "react-router-dom";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import FormSubscribe from "../../components/Forms/Subscribe/FormSubscribe";

function Footer() {
    return (
        <footer className="footer bg-dark py-5">
            <div className="container text-white d-flex flex-column px-5 gap-5">
                <div className="row d-flex justify-content-between py-4">
                    <div className="col-4 d-flex flex-column gap-4">
                        <h2 className='h2'>
                            <Link to='/' className='text-white'>Dever</Link>
                        </h2>
                        <p className='fs-5'>
                            Be saying moveth spirit fruitful called set evening fly give shall moveth lesser very.
                        </p>
                    </div>
                    <div className="col-6">
                        <FormSubscribe method='POST' />
                    </div>
                </div>

                <div className="row d-flex justify-content-between py-4">
                    <div className="col-6">
                        <ul className='footer__nav'>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>+1 202-358-0309</Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>hello@themebau.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 d-flex justify-content-between g-4">
                        <ul className='footer__nav'>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>About us</Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>Services</Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>Our team</Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>Careers</Link>
                            </li>
                        </ul>
                        <ul className='footer__nav'>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>Work process</Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>FAQ</Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>Our blog</Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>Contacts</Link>
                            </li>
                        </ul>
                        <ul className='footer__nav'>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>Privacy</Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>Terms of Use</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="row d-flex d-flex justify-content-between py-4">
                    <div className="col-4">
                        <ul className='footer__nav footer__nav--social'>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>
                                    <FaGithub />
                                </Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>
                                    <FaTelegram />
                                </Link>
                            </li>
                            <li className='footer__nav-item'>
                                <Link to='/' className='footer__nav-link'>
                                    <FaInstagram />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <p className='text-lite'>© 2020-2023 | Themebau by RunWebRun.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer