import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Badge,
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="inverse" light expand="md">
          <h1>
            <Badge color="secondary">My TODO App</Badge>
          </h1>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button color="primary">SignOut</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Enter TODO : </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Ex: Learn Serverless" />
                  <Button color="primary">ADD</Button>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
