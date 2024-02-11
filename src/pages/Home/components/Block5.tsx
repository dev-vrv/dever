import { Link } from "react-router-dom"


export default function Block5() {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-end create-everything py-5 g-5">
                <div className="col-5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    <img src="images/imgs/6.jpg" alt="" className="img-fluid aos-animate aos-init"/>
                </div>
                <div className="col-1"></div>
                <div className="col-5 d-flex align-items-center">
                    <h2 className="h2">
                        We create everything digital, printable and analytical 🔥
                    </h2>
                </div>
                <div className="col-1"></div>

                <div className="col-1"></div>
                <div className="col-2"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <img src="images/imgs/17.png" alt="" className="img-fluid aos-animate aos-init"/>
                </div>
                <div className="col-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <img src="images/imgs/1.jpg" alt="" className="img-fluid aos-animate aos-init"/>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <p className="fs-5 fw-light">
                        Won't seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.
                    </p>
                    <Link to={'/'} className="btn btn-lg btn-dark">
                        read more
                    </Link>
                </div>
            </div>
        </div>
    )

}