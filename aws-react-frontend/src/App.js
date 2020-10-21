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
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { todoRaw } from "./raw/todoUtils";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleListTodos = this.toggleListTodos.bind(this);
    this.state = {
      isOpen: false,
      isListTodosOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  toggleListTodos() {
    this.setState({
      isListTodosOpen: !this.state.isListTodosOpen,
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
          <Container style={{ paddingTop: "20px" }}>
            <Button
              color="primary"
              onClick={this.toggleListTodos}
              style={{ marginBottom: "1rem" }}
            >
              List TODOS
            </Button>
            <Collapse isOpen={this.state.isListTodosOpen}>
              <ListGroup>
                {todoRaw.map((todo) => {
                  return (
                    <Row style={{ padding: "5px" }}>
                      <Col>
                        <ListGroupItem key={todo.key}>
                          {todo.value}
                        </ListGroupItem>
                        <Button color="success" key={todo.key}>
                          Completed
                        </Button>
                        <Button color="info" key={todo.key}>
                          Update
                        </Button>
                      </Col>
                    </Row>
                  );
                })}
              </ListGroup>
            </Collapse>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
