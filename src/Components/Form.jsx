import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useRef, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const formRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_SHEETS_APP_SCRIPT, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.location.reload(true);
        alert(data.msg);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  return (
    <>
      <Container
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          style={{
            textAlign: "left",
            backgroundColor: "gray",
            padding: "5%",
            borderRadius: "15px",
          }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h3>Vai estar presente ?</h3>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nome e Apelido </Form.Label>
            <Form.Control type="text" placeholder="Nome" name="Name" required />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.SelectCustom">
            <Form.Label>Vai estar presente ?</Form.Label>
            <Form.Control
              as="select"
              required
              value={selectedOption}
              onChange={handleSelectChange}
              name="Presence"
            >
              <option value="" disabled></option>
              <option value="true1">Sim, nao faltaria por nada :)</option>
              <option value="true2">Sim, e levo a minha cara metade</option>
              <option value="true">
                Infelizmente nao poderei estar presente
              </option>
            </Form.Control>
          </Form.Group>

          {selectedOption == "true2" ? (
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label>Nome do acompanhante: </Form.Label>
              <Form.Control type="text" name="Plusone" />
            </Form.Group>
          ) : (
            <></>
          )}

          <Button style={{ float: "right" }} variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default ContactForm;
