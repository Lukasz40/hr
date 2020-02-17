import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class LoginPage extends Component {
    state={
        email: "",
        password: ""
    }

    handlerChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        const {handlerUserLogin} = this.props;
        return (
            <Container className="login">
                <Row className="justify-content-md-center">
                    <Col sm={6}>
                        <Form onSubmit={(e) => handlerUserLogin(e,this.state.email,this.state.password)}>
                            <h3>Zaloguj się</h3>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={this.state.email} onChange={this.handlerChange} name="email" type="email" placeholder="Wpisz email" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                <   Form.Label>Hasło</Form.Label>
                                    <Form.Control value={this.state.password} onChange={this.handlerChange} name="password" type="password" placeholder="Wpisz hasło" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Button className="btn-block" disabled={!this.validateForm()} variant="primary" type="submit">
                                        Zaloguj
                                    </Button>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <p className="forgot-password text-right">
                                        Nie masz konta? <Link to="/rejestracja">Zarejestruj się!</Link>
                                    </p>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
