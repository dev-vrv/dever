import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Block1() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <div className="text-center">
                <p className="fs-5">who we are</p>
                <h2 className="h2 d-flex flex-column align-items-center gap-2">
                    <span>An award-winning dev & design team that</span>
                    <span className="d-flex align-items-center gap-2">is proud of our work <FcApproval /></span>
                </h2>
            </div>

            <div className="row d-flex justify-content-evenly mt-5 py-4">
                <div className="col-10 col-lg-4 p-3">
                    <div className="line-item"></div>
                    <p className="fs-5 fw-light with-line mt-4">
                        Over 12 years of combined experience, and know thing or two about designing websites and mobile apps.
                    </p>
                </div>
                <div className="col-10 col-lg-4 p-3">
                    <p className="fs-5 fw-light">
                        Our team are passionate professionals who are deeply committed to their work. We take pride in our work and strive to ensure that your project not only meets, but exceeds your expectations
                    </p>
                    <Link to={'about'} className="btn btn-lg btn-dark mt-3">
                        About us
                    </Link>
                </div>
            </div>
        </div>
    );
}
