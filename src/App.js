import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Modal,
  Button,
} from "react-bootstrap";
import Forms from './components/Forms'

const initialValues = {
  friends: [
    {
      network: "1",
      name: "",
      address: "",
    },
  ],
};

const App = () => (
  <Container>
     <Col md={6}>
      <Forms/>
    </Col>
  </Container>
);

export default App;
