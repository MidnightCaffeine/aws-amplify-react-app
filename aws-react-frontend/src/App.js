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
  Card,
  CardBody,
} from "reactstrap";

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
          <Container style={{paddingTop: "20px"}}>
            <Button
              color="primary"
              onClick={this.toggleListTodos}
              style={{ marginBottom: "1rem" }}
            >
              List TODOS
            </Button>
            <Collapse isOpen={this.state.isListTodosOpen}>
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
