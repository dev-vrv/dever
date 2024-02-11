import { Link } from "react-router-dom";

function FeaturedWork() {
    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-lg-9 row d-flex justify-content-between">
                <div className="col-md col-lg-5">
                    <h2 className="display-1 fw-normal">Featured work</h2>
                </div>
                <div className="col-1">
                    <div className="line-item px-4 mt-4"></div>
                </div>
                <div className="col-3 ">
                    <Link to={"services"} className="btn btn-lg btn-dark aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        all works
                    </Link>
                </div>
            </div>
        </div>
    );
}

function FeaturedWorkItems() {
    return (
        <div className="row featured-work">
            <div className="d-none d-lg-block col-lg-1"></div>

            <div className="featured-work__item small col-md-5 col-lg-4">
                <Link to={"/"} className="featured-work__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                    <span className="featured-work__card--img">
                        <img src="/images/featured/1.png" alt="" className="img-fluid" />
                    </span>
                    <span className="featured-work__card--info">
                        <span className="featured-work__card--title">
                            UX / UI
                        </span>
                        <span className="featured-work__card--subtitle">
                            design
                        </span>
                    </span>
                </Link>
            </div>
            <div className="d-none d-lg-block col-lg-1"></div>
            <div className="featured-work__item large col-md-7 col-lg-6">
                <Link to={"/"} className="featured-work__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                    <span className="featured-work__card--img">
                        <img src="/images/featured/2.png" alt="" className="img-fluid" />
                    </span>
                    <span className="featured-work__card--info">
                        <span className="featured-work__card--title">
                            Creative Branding
                        </span>
                        <span className="featured-work__card--subtitle">
                            branding
                        </span>
                    </span>
                </Link>
            </div>

            <div className="d-none d-lg-block col-lg-12 py-5"></div>

            <div className="featured-work__item large col-md-7 col-lg-6">
                <Link to={"/"} className="featured-work__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                    <span className="featured-work__card--img">
                        <img src="/images/featured/3.png" alt="" className="img-fluid" />
                    </span>
                    <span className="featured-work__card--info">
                        <span className="featured-work__card--title">
                            Website 
                        </span>
                        <span className="featured-work__card--subtitle">
                            development
                        </span>
                    </span>
                </Link>
            </div>
            <div className="d-none d-lg-block col-lg-1"></div>
            <div className="featured-work__item small col-md-5 col-lg-4">
                <Link to={"/"} className="featured-work__card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                    <span className="featured-work__card--img">
                        <img src="/images/featured/4.png" alt="" className="img-fluid" />
                    </span>
                    <span className="featured-work__card--info">
                        <span className="featured-work__card--title">
                            Api Integration
                        </span>
                        <span className="featured-work__card--subtitle">
                            development
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default function Block3() {
    return (
        <div className="container mt-5">
            <FeaturedWork />
            <FeaturedWorkItems />
        </div>
    );
}
