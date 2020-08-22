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
import hero1 from "./assets/images/wildfusion_hero_1_2.png"
import leaware from "./assets/images/img__hero-logo-leaware.png"
import mvp from "./assets/images/img__hero-logo-mvp.png"
import tonik from "./assets/images/img__hero-logo-tonik.png"
import kato from "./assets/images/img__hero-logo-kato.png"
import brighter from "./assets/images/img__hero-logo-brighter.png"
import heynink from "./assets/images/img__hero-logo-heynink.png"
import frischluft from "./assets/images/img__hero-logo-frischluft.png"
import {
  Headerlogo,
  Culture,
  Efficiencies,
  ElasticScaling,
  Foundation,
  Innovation,
  Speed,
  Transformation
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
        <Row className="skill-cards-section">
          <Col md="6" lg="6" className="skill-cards">
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
                    <img src={Speed} alt="foundation-logo" />
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
                    <img src={Innovation} alt="foundation-logo" />
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
                    <img src={Culture} alt="foundation-logo" />
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
          <Col md="6" lg="6" className="skill-cards">
            <Row>
              <Col
                sm={{ size: 8, offset: 2 }}
                md={{ size: 8, offset: 2 }}
                lg={{ size: 8, offset: 2 }}
                className="mb-5">
                <SectionHeader>Understand Opportunity</SectionHeader>
                <SectionTitle>Recognize your goals</SectionTitle>
                <span>
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
                        <img src={Innovation} alt="foundation-logo" />
                        <h2 className="font-weight-bold">Technology Innovation</h2>
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
                        <img src={Culture} alt="foundation-logo" />
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
              <Col md="6" lg="6" className="mt-0 mt-md-5 mt-lg-5 pt-0 pt-md-5 pt-lg-5">
                <Card className="card">
                  <CardTitle>
                    <img src={Culture} alt="foundation-logo" />
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
        </Row>
    </div>
  );
}

export default App;
