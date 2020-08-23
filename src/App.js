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
} from "reactstrap";
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
  neoboost
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
} from "./components/logos"

const BoldNavText = ({ text, link }) => (
<NavItem className="font-weight-bold bold-nav">
  <a href={link}>
    {text}
  </a>
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
        <Navbar light expand="lg" className="ml-5 mr-0 mr-lg-0 mr-md-5 mr-sm-5">
          <NavbarBrand href="#">
            <img src={Headerlogo} alt="logo" />
          </NavbarBrand>
          {/* TODO: Change hamburger to X svg on collapse open */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <BoldNavText link="#" text="neoVision" />
              <BoldNavText link="#" text="neoVenture" />
              <BoldNavText link="#" text="neoBoost" />
            </Nav>
            <Nav className="ml-auto" navbar>
              <BoldNavText link="/" text="About Us" />
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
        <div className="features py-5">
          <div className="text-center pb-5">
            <SectionHeader>Our Solutions</SectionHeader>
            <SectionTitle>We help seizing technology opportunities</SectionTitle>
            <span className="font-weight-bold">Our technologies services are designed to build the capabilities required <br /> to seize your distinct technology opportunities</span>
          </div>
          <Col>
            <Row className="feature-detail">
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
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={Readiness} alt="readiness-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Technology Readiness</h5>
                  </Col>
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={Strategy} alt="strategy-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Technology Stratey</h5>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={Acceleration} alt="readiness-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Technology Acceleration</h5>
                  </Col>
                  <Col sm="6" md-6 lg="6" className="d-flex">
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
            <Row className="feature-detail">
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
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={InnovationScouting} alt="Innovation-Scouting-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Innovation Scouting</h5>
                  </Col>
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={VentureScaling} alt="Venture=Scaling-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Venture Scaling</h5>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={MVP} alt="mvp-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">MVP & Product Building</h5>
                  </Col>
                  <Col sm="6" md-6 lg="6" className="d-flex">
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
            <Row className="feature-detail">
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
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={OperationsAssessment} alt="OperationsAssessment-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Operations Assessment</h5>
                  </Col>
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={AgileCoaching} alt="Agile-Coaching-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Agile Coaching</h5>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={OperatingModelDesign} alt="OperatingModelDesign-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Operating Model Design</h5>
                  </Col>
                  <Col sm="6" md-6 lg="6" className="d-flex">
                    <img src={ScalablePartnerEcosystem } alt="ScalablePartnerEcosystem-logo" />
                    <h5 className="align-self-center ml-4 font-weight-bold">Scalable Partner Ecosystem</h5>
                  </Col>
                  </Row>
                  <Row className="mt-5">
                  <Col sm="6" md-6 lg="6" className="d-flex">
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
        </div>
    </div>
  );
}

export default App;
