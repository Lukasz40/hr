import React from "react";
import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Accordion,
  Card
} from "react-bootstrap";
import DevLang from "../components/sections/DevLang";
import Tools from "../components/sections/Tools";
import DataBase from "../components/sections/DataBase";
import Others from "../components/sections/Others";
import Education from "../components/sections/Education";
import Languages from "../components/sections/Languages";
import Projects from "../components/sections/Projects";
import Certificates from "../components/sections/Certificates";


class UserForm extends React.Component {
  state = {
    userForm: {
      firstName: "Łukasz",
      lastName: "Karbowniczek",
      devLang: [
        {
          devLangs: "HTML",
          devExperience: "12",
          devLastUse: "2020"
        },
        {
          devLangs: "CSS",
          devExperience: "12",
          devLastUse: "2020"
        }
      ],
      tools: [
        {
          tool: "GIT",
          toolExperience: "5",
          toolLastUse: "2020"
        },
        {
          tool: "Freemarker",
          toolExperience: "2",
          toolLastUse: "2020"
        }
      ],
      education: [
        {
          school: "fgdfgsdfg",
          department: "sdfgsdfgsdf",
          direction: "dfgsdfgsdf",
          title: "gsdfgsdfgsd",
          education_year: "3"
        },
        {
          school: "AGH",
          department: "Informatyka",
          direction: "Programowanie",
          title: "Magister",
          education_year: "5"
        }
      ],
      certificates: [
        {
          certificate_year: "a",
          certificate_name: "a",
          certificate_domain: "a",
          certificate_rganized: "a"
        },
        {
          certificate_year: "b",
          certificate_name: "b",
          certificate_domain: "b",
          certificate_rganized: "b"
        }
      ],
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    //this.setState({})
  };

  handleChange = e => {
    const name = [e.target.name];
    const value = e.target.value;
    this.setState(prevState => {
      const userForm = {
        ...prevState.userForm,
        [name]: value
      };

      return {
        userForm
      };
    });
  };

  handlerAddRow = (rowState, sectionName) => {
    this.setState(prevState => {
      const section = prevState.userForm[sectionName].concat(rowState);
      const sections = {
        ...prevState.userForm,
        [sectionName]: section
      };
      return {
        userForm: sections
      };
    });
    return true;
  };

  handlerDeleteRow = (index, sectionName) => {
    const section = this.state.userForm[sectionName].splice(index, 1);
    const userForm = this.state.userForm
    this.setState({
        ...userForm,
        [sectionName]: section
    })
  }

  render() {
    const { userForm } = this.state;
    const devLangsDictionary = ["HTML","HTML5","CSS","CSS3","Less","Sass","JavaScript","TypeScript","jQuery","XML","Velocity","Bootstrap","XSLT",
      "PHP","Python","ReactJS","Angular","SQL","C","C++","C #",".NET","Java","Hibernate","Spring","Spring Boot","Spring Data","Spring Security",
      "Web Services","RESTful Web Services","Apache Tomcat","Thymeleaf"]
    const experienceDictionary = ["<0,5","1","2","3","4","5","6","7","8","9","10",">10"]
    const lastUseDictionary = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015",
      "2016","2017","2018","2019","2020"]
    return (
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col xl={10}>
            <Form>
              <Form.Group>
                <h3>Szablon życiorysu pracownika</h3>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    value={userForm.firstName}
                    onChange={this.handleChange}
                    name="firstName"
                    placeholder="Wpisz imię"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>nazwisko</Form.Label>
                  <Form.Control
                    value={userForm.lastName}
                    onChange={this.handleChange}
                    name="lastName"
                    placeholder="Wpisz nazwisko"
                  />
                </Form.Group>
              </Form.Row>

              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Języki programowania/biblioteki/frameworki/technologie
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <DevLang
                        devLangsDictionary={devLangsDictionary}
                        experienceDictionary={experienceDictionary}
                        lastUseDictionary={lastUseDictionary}
                        userForm={userForm}
                        handlerAddRow={this.handlerAddRow}
                        handlerDeleteRow={this.handlerDeleteRow}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Narzędzia
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Tools
                        experienceDictionary={experienceDictionary}
                        lastUseDictionary={lastUseDictionary}
                        userForm={userForm}
                        handlerAddRow={this.handlerAddRow}
                        handlerDeleteRow={this.handlerDeleteRow}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Bazy danych
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <DataBase
                        experienceDictionary={experienceDictionary}
                        lastUseDictionary={lastUseDictionary}
                        userForm={userForm}
                        handlerAddRow={this.handlerAddRow}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Inne (systemy operacyjne, platformy)
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <Others
                        experienceDictionary={experienceDictionary}
                        lastUseDictionary={lastUseDictionary}
                        userForm={userForm}
                        handlerAddRow={this.handlerAddRow}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Wykształcenie
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <Education
                        userForm={userForm}
                        handlerAddRow={this.handlerAddRow}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    Języki
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <Languages
                        userForm={userForm}
                        handlerAddRow={this.handlerAddRow}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    Projekty
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <Projects
                        userForm={userForm}
                        handlerAddRow={this.handlerAddRow}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    Kursy i certyfikaty
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <Certificates
                        userForm={userForm}
                        handlerAddRow={this.handlerAddRow}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                
              </Accordion>

              <Form.Row>
                <Button
                  onClick={this.handleSubmit}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserForm;