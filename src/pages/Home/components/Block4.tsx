import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import {
    FigureOne,
    FigureTwo,
    FigureThree,
    FigureFore,
} from "../../../components/Figures/Figures";


function WorkProcessTabs() {
    return (
        <Tab.Container id="tabs-work-process" defaultActiveKey="idea">
            <Row>
                <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="idea">Search an Idea!</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="design">Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="development">
                                Development
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="release">Release</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="idea">
                            <div className="row d-flex justify-content-between">
                                <div className="col-6">
                                    <p className="text-lite lh-lg">
                                        God he their every blessed upon male
                                        earth also midst fill creeping Seas
                                        their winged can't shall signs sea
                                        mornings gathered brought, creeping
                                        fruitful you'll open there bearing.
                                    </p>
                                    <Link
                                        to={"/"}
                                        className="btn btn-light mt-3"
                                    >
                                        read more
                                    </Link>
                                </div>
                                <div className="col-5">
                                    <FigureOne />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="design">
                            <div className="row d-flex justify-content-between">
                                <div className="col-6">
                                    <p className="text-lite lh-lg">
                                        Creepeth female let thing deep sea
                                        yielding it, void midst third creepeth
                                        tree don't let upon greater. Their good
                                        Living beast without great us you'll
                                        lights seasons upon god.
                                    </p>
                                    <Link
                                        to={"/"}
                                        className="btn btn-light mt-3"
                                    >
                                        read more
                                    </Link>
                                </div>
                                <div className="col-5">
                                    <FigureTwo />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="development">
                            <div className="row d-flex justify-content-between">
                                <div className="col-6">
                                    <p className="text-lite lh-lg">
                                        Set image without divide the doesn't
                                        whales have tree can't stars signs male
                                        may male over first can't for were i
                                        second living for itself fourth that one
                                        give lights.
                                    </p>
                                    <Link
                                        to={"/"}
                                        className="btn btn-light mt-3"
                                    >
                                        read more
                                    </Link>
                                </div>
                                <div className="col-5">
                                    <FigureThree />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="release">
                            <div className="row d-flex justify-content-between">
                                <div className="col-6">
                                    <p className="text-lite lh-lg">
                                        Their behold is sea you'll cattle also
                                        together fowl day moved forth fish fowl
                                        every give fowl. Fruit subdue firmament
                                        i living won't waters called signs
                                        heaven can't, fifth days.
                                    </p>
                                    <Link
                                        to={"/"}
                                        className="btn btn-light mt-3"
                                    >
                                        read more
                                    </Link>
                                </div>
                                <div className="col-5">
                                    <FigureFore />
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}


export default function Block4() {
    return (
        <div className="w-100 mt-5 bg-dark work-process">
            <div className="container">
                <h2 className="display-3 text-white py-5 mb-5">Work process</h2>

                <WorkProcessTabs />
            </div>
        </div>
    );
}