import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { GiTreeBranch } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";


interface CardServiceProps {
    image: string;
    caption: string;
    to: string;
    icon: React.ReactNode;
    animation?: string;
    duration?: number;
    delay?: number;
}

function CardService(props: CardServiceProps) {
    return (
        <NavLink to={props.to} className="card-service">
            <img
                src={props.image}
                alt=""
                className="img-fluid aos-init aos-animate"
                data-aos={props.animation}
                data-aos-duration={props.duration}
                data-aos-delay={props.delay}
            />
            <p className="card-service__info">
                <i className="card-service__icon">{props.icon}</i>
                <span className="card-service__caption">{props.caption}</span>
                <span className="card-service__more">
                    <span>read more</span>
                    <i className="ms-2">
                        <FaLongArrowAltRight />
                    </i>
                </span>
            </p>
        </NavLink>
    );
}

export default function Block2() {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <CardService
                        to={"/"}
                        image={"/images/cards-service/1.jpg"}
                        caption={"Web Design and Development"}
                        icon={<GiCoffeeCup />}
                        animation="fade-up"
                        duration={1000}
                        delay={100}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardService
                        to={"/"}
                        image={"/images/cards-service/2.jpg"}
                        caption={"Brand Strategy Accelerator"}
                        icon={<HiOutlineCog6Tooth />}
                        animation="fade-up"
                        duration={1000}
                        delay={200}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardService
                        to={"/"}
                        image={"/images/cards-service/3.jpg"}
                        caption={"Packaging and Brand Identity"}
                        icon={<GiTreeBranch />}
                        animation="fade-up"
                        duration={1000}
                        delay={300}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardService
                        to={"/"}
                        image={"/images/cards-service/4.jpg"}
                        caption={"Content Production"}
                        icon={<IoBookOutline />}
                        animation="fade-up"
                        duration={1000}
                        delay={400}
                    />
                </div>
            </div>
        </div>
    );
}
