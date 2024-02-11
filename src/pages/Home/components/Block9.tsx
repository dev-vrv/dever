import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Block9() {
    return (
        <div className="lets-work py-5">
            <div className="container d-flex flex-column gap-5">
                <div className="line mt-5"></div>
                <Link to='/' className="row d-flex justify-content-center py-5 text-dark lets-work__link">
                    <div className="col-6">
                        <h2 className="lets-work__link--title fw-normal w-fit">
                            <span>
                                Let's work
                            </span>
                            <span className="d-block border"></span>
                            <span>
                                together
                            </span>
                        </h2>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <p className="lets-work__link--arrow">
                            <IoIosArrowRoundForward />
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
