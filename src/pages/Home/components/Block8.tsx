import { Link } from "react-router-dom";

export default function Block8() {
    return (
        <div className="new py-5">
            <div className="container mt-5 py-5 d-flex flex-column gap-5 align-items-center">
                
                <h2 className="display-4 fw-normal">
                    What's new?
                </h2>

                <div className="row new__cards mt-5">
                    <div className="col-4 new__cards--box">
                        <div className="new__cards--box-img aos-init aos-animate" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                            <img src="/images/cards-service/1.jpg" alt="new-3" />
                        </div>
                        <p className="new__cards--box-data">
                            28 may, 2023
                        </p>
                        <p className="new__cards--box-text aos-init aos-animate" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">
                            This week's top Stories about Development
                        </p>
                    </div>
                    <div className="col-4 new__cards--box">
                        <div className="new__cards--box-img aos-init aos-animate" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                            <img src="/images/cards-service/2.jpg" alt="new-3" />
                        </div>
                        <p className="new__cards--box-data">
                            13 oct, 2023
                        </p>
                        <p className="new__cards--box-text aos-init aos-animate" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">
                            Facts about Business that you never knew than 100+ Characters
                        </p>
                    </div>
                    <div className="col-4 new__cards--box">
                        <div className="new__cards--box-img aos-init aos-animate" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                            <img src="/images/cards-service/3.jpg" alt="new-3" />
                        </div>
                        <p className="new__cards--box-data">
                            19 aug, 2023
                        </p>
                        <p className="new__cards--box-text aos-init aos-animate" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">
                            Office explained in fewer than 100+ Characters
                        </p>
                    </div>
                </div>

                <Link to='posts' className="btn btn-lg btn-dark mt-5">all posts</Link>
            </div>
        </div>
    );
}
