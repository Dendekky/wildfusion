import React, { useState } from 'react';
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Card,
  CardTitle,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { HashLink as Link } from 'react-router-hash-link';
import {
  hero1,
  leaware,
  mvp,
  tonik,
  kato,
  brighter,
  heynink,
  frischluft,
  neovision,
  neoventure,
  neoboost,
  consumergoods
} from "./components/images"
import {
  Headerlogo,
  Culture,
  Efficiencies,
  ElasticScaling,
  Foundation,
  Innovation,
  Speed,
  Transformation,
  Readiness,
  Strategy,
  Acceleration,
  SmartEfficiencies,
  InnovationScouting,
  VentureScaling,
  MVP,
  InnovationUnits,
  OperationsAssessment,
  AgileCoaching,
  OperatingModelDesign,
  ScalablePartnerEcosystem,
  DevopsTransformation,
  Linkedinlogo,
  Xinglogo
} from "./components/logos"

const BoldNavText = ({ text, link }) => (
<NavItem className="font-weight-bold bold-nav">
  <Link smooth to={link} className="navlink"activeClassName="selected">
    {text}
  </Link>
</NavItem>
)

const CustomButton = ({ children }) => (
  // TODO make button transit on hover
  <button className="custom-button">{children}</button>
)
const CustomLink = ({ text, link }) => (
  <a href={link} className="custom-link">{text}</a>
)
const SectionHeader = ({ children }) => (
  <h4 className="section-header">{children}</h4>
)

const SectionTitle = ({ children }) => (
  <h4 className="section-title">{children}</h4>
)

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="homepage">
      <Row>
        <Col className="header">
        <Navbar light expand="lg" className="ml-0 ml-md-5 mr-0 mr-lg-0 mr-md-5 mr-sm-5">
          <NavbarBrand href="#">
            <img src={Headerlogo} alt="logo" />
          </NavbarBrand>
          {/* TODO: Change hamburger to X svg on collapse open */}
          <NavbarToggler onClick={toggle}>{isOpen ? (
            <img style={{ height: "30px" }} src="https://img.icons8.com/ios/50/000000/xbox-x.png" alt="X-icon" />
            ) : (
            <img style={{ height: "30px" }} src="https://img.icons8.com/material-two-tone/24/000000/menu.png" alt="hamburger"/>
            )}
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <BoldNavText link="#neovision" text="neoVision" />
              <BoldNavText link="#neoventure" text="neoVenture" />
              <BoldNavText link="#neoboost" text="neoBoost" />
            </Nav>
            <Nav className="ml-auto" navbar>
              <BoldNavText link="#about" text="About Us" />
            </Nav>
            <Nav className="mr-auto" navbar>
              <CustomButton>Get in touch</CustomButton>
            </Nav>
          </Collapse>
        </Navbar>
        </Col>
        </Row>
        <Row className="hero-section">
          <Col lg="5" className="intro">
            <div>
              <h2>
                Unlock your <br /> full technology <br /> potential
              </h2>
              <p>
                We create future-ready technology capabilities that boost your business and 
                help you becoming a technology leader. Find out what we can do for you. 
              </p>
            </div>
            <div>
              <CustomButton>Learn more</CustomButton>
              <span className="mx-4">or</span>
              <CustomLink link="#" text="Contact Us" />
            </div>
          </Col>
          <Col lg="7" className="hero-bg">
            <img src={hero1} alt="hero1" />
          </Col>
        </Row>
        <Row className="partner-section">
          <Col className="partner-logos">
            <div>
              <h3>
                Our Partners:
              </h3>
            </div>
            <Row>
              <Col sm="12" md="12" lg="12">
                <img src={leaware} alt="leaware" />
                <img src={mvp} alt="mvp" />
                <img src={tonik} alt="tonik" />
              </Col>
              <Col sm="12" md="12" lg="12">
              <img src={kato} alt="kato" />
              <img src={brighter} alt="brighter" />
              <img src={frischluft} alt="frischluft" />
              <img src={heynink} alt="heynink" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="skill-cards-section py-5">
          <Col md="6" lg="6" className="skill-cards pl-5 pr-5 pr-md-3">
            <Row>
              <Col md="6" lg="6">
                <Card className="card">
                  <CardTitle>
                    <img src={Foundation} alt="foundation-logo" />
                    <h2 className="font-weight-bold">Technology Foundation</h2>
                  </CardTitle>
                  <CardBody>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" lg="6">
                <Card className="card">
                  <CardTitle>
                    <img src={Speed} alt="speed-logo" />
                    <h2 className="font-weight-bold">Speed & Agility</h2>
                  </CardTitle>
                  <CardBody>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6" lg="6">
                <Card className="card">
                  <CardTitle>
                    <img src={Innovation} alt="innovation-logo" />
                    <h2 className="font-weight-bold">Technology Innovation</h2>
                  </CardTitle>
                  <CardBody>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" lg="6">
                <Card className="card">
                  <CardTitle>
                    <img src={Culture} alt="culture-logo" />
                    <h2 className="font-weight-bold">Culture & Skill Shift</h2>
                  </CardTitle>
                  <CardBody>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md="6" lg="6" className="skill-cards pr-5 pl-5 pl-md-3">
            <Row>
              <Col
                sm={{ size: 8, offset: 2 }}
                md={{ size: 8, offset: 2 }}
                lg={{ size: 8, offset: 2 }}
                className="d-none d-md-inline d-lg-inline mb-5 pb-5">
                <SectionHeader>Understand Opportunity</SectionHeader>
                <SectionTitle>Recognize your goals</SectionTitle>
                <span className="font-weight-bold">
                  Technology provides new opportunities. 
                  To leverage them, you need to understand your company's technology needs
                </span>
              </Col>
            </Row>
            <Row>
              <Col md="6" lg="6">
                <Row>
                  <Col md="12" lg="12">
                    <Card className="card">
                      <CardTitle>
                        <img src={ElasticScaling} alt="elastic-scaling-logo" />
                        <h2 className="font-weight-bold">Elastic Scaling</h2>
                      </CardTitle>
                      <CardBody>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="12" lg="12">
                    <Card className="card">
                      <CardTitle>
                        <img src={Efficiencies} alt="efficiency-logo" />
                        <h2 className="font-weight-bold">Smart Efficiencies</h2>
                      </CardTitle>
                      <CardBody>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md="6" lg="6" className="mt-0 mt-md-5 mt-lg-5 pt-0 pt-md-5 pt-lg-5">
                <Card className="card">
                  <CardTitle>
                    <img src={Transformation} alt="transformation-logo" />
                    <h2 className="font-weight-bold">Transformation Acceleration</h2>
                  </CardTitle>
                  <CardBody>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="features pt-5">
          <div className="text-center pb-5">
            <SectionHeader>Our Solutions</SectionHeader>
            <SectionTitle>We help seizing technology opportunities</SectionTitle>
            <span className="font-weight-bold">Our technologies services are designed to build the capabilities required <br /> to seize your distinct technology opportunities</span>
          </div>
          <Col>
            <Row id="neovision" className="feature-detail">
              <Col md="5" lg="5">
                <img src={neovision} alt="neovision-logo" />
              </Col>
              <Col md="7" lg="7" className="px-2 pr-5">
                <SectionTitle>neoVision</SectionTitle>
                <h3>Design and  accelerate future-ready technologies strategies</h3>
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                </span>
                <Row className="mt-5">
                  <Col sm="6" md="6" lg="6" className="d-flex mb-5 mb-md-0">
                    <img src={Readiness} alt="readiness-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Technology Readiness</h5>
                  </Col>
                  <Col sm="6" md="6" lg="6" className="d-flex">
                    <img src={Strategy} alt="strategy-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Technology Strategy</h5>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm="6" md="6" lg="6" className="d-flex mb-5 mb-md-0">
                    <img src={Acceleration} alt="readiness-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Technology Acceleration</h5>
                  </Col>
                  <Col sm="6" md="6" lg="6" className="d-flex">
                    <img src={SmartEfficiencies } alt="strategy-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Smart Efficiencies</h5>
                  </Col>
                </Row>
                <div className="my-5">
                  <CustomButton>Send a request</CustomButton>
                  <span className="mx-4">or</span>
                  <CustomLink link="#" text="Learn More" />
                </div>
                <hr />
              </Col>
            </Row>
            <Row id="neoventure" className="feature-detail">
              <Col md="5" lg="5">
                <img src={neoventure} alt="neoventure-logo" />
              </Col>
              <Col md="7" lg="7" className="px-2 pr-5">
                <SectionTitle>neoVenture</SectionTitle>
                <h3>Design, build and scale technology innovation</h3>
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                </span>
                <Row className="mt-5">
                  <Col sm="6" md="6" lg="6" className="d-flex mb-5 mb-md-0">
                    <img src={InnovationScouting} alt="Innovation-Scouting-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Innovation Scouting</h5>
                  </Col>
                  <Col sm="6" md="6" lg="6" className="d-flex">
                    <img src={VentureScaling} alt="Venture=Scaling-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Venture Scaling</h5>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm="6" md="6" lg="6" className="d-flex mb-5 mb-md-0">
                    <img src={MVP} alt="mvp-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">MVP & Product Building</h5>
                  </Col>
                  <Col sm="6" md="6" lg="6" className="d-flex">
                    <img src={InnovationUnits } alt="Innovation-Units-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Innovation Units</h5>
                  </Col>
                </Row>
                <div className="my-5">
                  <CustomButton>Send a request</CustomButton>
                  <span className="mx-4">or</span>
                  <CustomLink link="#" text="Learn More" />
                </div>
                <hr />
              </Col>
            </Row>
            <Row id="neoboost" className="feature-detail">
              <Col md="5" lg="5">
                <img src={neoboost} alt="neoboost-logo" />
              </Col>
              <Col md="7" lg="7" className="px-2 pr-5">
                <SectionTitle>neoboost</SectionTitle>
                <h3>Boost technology operation for agile scalability</h3>
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                </span>
                <Row className="mt-5">
                  <Col sm="6" md="6" lg="6" className="d-flex mb-5 mb-md-0">
                    <img src={OperationsAssessment} alt="OperationsAssessment-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Operations Assessment</h5>
                  </Col>
                  <Col sm="6" md="6" lg="6" className="d-flex">
                    <img src={AgileCoaching} alt="Agile-Coaching-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Agile Coaching</h5>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm="6" md="6" lg="6" className="d-flex mb-5 mb-md-0">
                    <img src={OperatingModelDesign} alt="OperatingModelDesign-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Operating Model Design</h5>
                  </Col>
                  <Col sm="6" md="6" lg="6" className="d-flex">
                    <img src={ScalablePartnerEcosystem } alt="ScalablePartnerEcosystem-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Scalable Partner Ecosystem</h5>
                  </Col>
                  </Row>
                  <Row className="mt-5">
                  <Col sm="6" md="6" lg="6" className="d-flex">
                    <img src={DevopsTransformation } alt="DevopsTransformation-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Devops Transformation</h5>
                  </Col>
                </Row>
                <div className="my-5">
                  <CustomButton>Send a request</CustomButton>
                  <span className="mx-4">or</span>
                  <CustomLink link="#" text="Learn More" />
                </div>
                <hr />
              </Col>
            </Row>
          </Col>
          <Row className="case-study">
            <Col md="6" lg="6" className="content-image">
              <img src={consumergoods} alt="consumer-goods" />
            </Col>
            <Col md="6" lg="6" className="content-text">
              <SectionHeader>Cases</SectionHeader>
              <SectionTitle>Consumer Goods</SectionTitle>
              <h4 className="my-5">
                Setup of a new technology operating model for Global ConsumerGoods Company in order
                to stregthen availability of critical resources for client's digital ambition.
              </h4>
              <Row className="my-5 py-5 font-weight-bold">
                <Col sm="4" md="4" lg="4">
                  <hr style={{ border: "2px solid #20c997", width: "70%", margin: 0 }} />
                  <h1 className="font-weight-bolder">5</h1>
                  <p>digital competence centers established</p>
                </Col>
                <Col sm="4" md="4" lg="4">
                  <hr style={{ border: "2px solid #20c997", width: "70%", margin: 0 }} />
                  <h1 className="font-weight-bolder">28</h1>
                  <p>mEUR innovation budgets released</p>
                </Col>
                <Col sm="4" md="4" lg="4">
                  <hr style={{ border: "2px solid #20c997", width: "70%", margin: 0 }} />
                  <h1 className="font-weight-bolder">10%</h1>
                  <p>more new IT resources</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="about" className="about-section mt-5 py-5">
            <Col sm="12" md="12" lg="12">
              <SectionHeader>About Us</SectionHeader>
              <SectionTitle>We build technology capabilities</SectionTitle>
            </Col>
            <Col md="6" lg="6">
              <h4 className="my-4">
                Our mission is to enable our clients to take full benefit of their technology potential for fast
                innovation, efficient business growth, and intelligent automation.
              </h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <CustomLink link="#" text="Learn more" />
            </Col>
            <Col md="6" lg="6">
              <h3 className="my-4 font-weight-bold mx-0 mx-md-5 px-0 px-md-5">See who we are</h3>
              <div className="d-flex my-4 mx-0 mx-md-5 px-0 px-md-5">
                <img src={Linkedinlogo} alt="linkedin" />
                <h5 className="ml-4">Linkedin</h5>
              </div>
              <div className="d-flex my-4 mx-0 mx-md-5 px-0 px-md-5">
                <img src={Xinglogo} alt="Xinglogo" />
                <h5 className="ml-4">Xing</h5>
              </div>
            </Col>
          </Row>
          <Col id="contact" className="contact-section py-5">
            <Row className="contact-info py-4">
              <Col md="8" lg="8">
                <SectionHeader>Contact</SectionHeader>
                <h4 style={{ color: "#f2f2f2", fontWeight: "bold", fontSize: "36px" }}>Take advantage of expert knowledge</h4>
                <p style={{ color: "#efefef", padding: "4px 0 4px 0" }}>Feel free to get in touch with us via email or phone</p>
                <Row>
                  <Col md="6" lg="4">
                    <CustomLink link="#" text="info@neonerv.com" />
                  </Col>
                  <Col md="6" lg="4">
                    <CustomLink link="#" text="+49 (0) 30/20 60 86 21" />
                  </Col>
                </Row>
              </Col>
              <Col md="4" lg="4" className="py-5">
                <CustomButton>Let's talk</CustomButton>
              </Col>
            </Row>
            <hr />
            <Row className="footer-section py-5">
              <Col sm="4" md="4" lg="4" className="pr-5">
                <Row>
                  <img src={Headerlogo} alt="header" />
                </Row>
                <Row className="contact-logos">
                  <img src={Linkedinlogo} alt="linkedin" />
                  <img src={Xinglogo} alt="xing" />
                </Row>
                <Row>
                  <p style={{ color: "#efefef", padding: "12px 0 12px 0" }}>Copyright &copy; 2019 neonerv</p>
                </Row>
              </Col>
              <Col sm="4" md="2" lg="2" className="px-0 px-md-5">
                <h6 style={{ color: "#8d8d8d", fontWeight: "bold", paddingBottom: "8px" }}>PRODUCT</h6>
                <p style={{ color: "#efefef", padding: "2px 0 2px 0" }}>neoVision</p>
                <p style={{ color: "#efefef", padding: "2px 0 2px 0" }}>neoVenture</p>
                <p style={{ color: "#efefef", padding: "2px 0 2px 0" }}>neoBoost</p>
              </Col>
              <Col sm="4" md="2" lg="2" className="px-0 px-md-5">
                <h6 style={{ color: "#8d8d8d", fontWeight: "bold", paddingBottom: "8px"  }}>COMPANY</h6>
                <p style={{ color: "#efefef", padding: "2px 0 2px 0" }}>About us</p>
                <p style={{ color: "#efefef", padding: "2px 0 2px 0" }}>Privacy Policy</p>
                <p style={{ color: "#efefef", padding: "2px 0 2px 0" }}>Terms of use</p>
              </Col>
              <Col md="4" lg="4" className="px-0 px-md-5">
               <h6 style={{ color: "#8d8d8d", fontWeight: "bold", paddingBottom: "8px"  }}>WANT TO KNOW MORE</h6>
               <p style={{ color: "#efefef", padding: "2px 0 2px 0" }}>Get Monthly Updates and sign up for the newsletter</p>
               <InputGroup>
                  <Input placeholder="Enter your email address" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText style={{ cursor: "pointer"}} className="submit-button mr-2" />
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </Col>
        </div>
    </div>
  );
}

export default App;
