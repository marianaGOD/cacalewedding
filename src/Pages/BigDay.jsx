import Map from "../Components/Map";
import "../styles/BidDay.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Ensure these are imported to use Bootstrap components

export default function BidDay() {
  function openExternalSite(url) {
    window.open(url, "_blank");
  }

  return (
    <Container className="bigday-container">
      <Row className="mt-3">
        <Col xs={12}>
          <div className="planning bd-card">
            <h2>Plano do dia</h2>
            <div className="activities">
              <p>17h00 Cerimónia</p>
              <p>18h30 Cocktail</p>
              <p>20h30 Jantar</p>
              <p>23h30 Festa</p>
            </div>
          </div>
        </Col>

        <Col xs={12} className="mt-3">
          <div className="bd-maps bd-card">
            <h2>Como chegar:</h2>
            <Map className="my-map" />
          </div>
        </Col>

        <Col xs={12} className="mt-3">
          <div className="hotels bd-card">
            <h2>Alojamento</h2>
            <Row>
              {/* Assuming you might have multiple hotels, iterating could be an option */}
              {[1, 2, 3].map((hotel) => (
                <Col sm={12} md={4} key={hotel} className="mb-3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://turisver.pt/wp-content/uploads/2022/08/Sheraton-Lisboa.png"
                    />
                    <Card.Body>
                      <Card.Title>Sheraton</Card.Title>
                      <Card.Text>Bom e barato</Card.Text>
                      <Button
                        variant="secondary"
                        onClick={() =>
                          openExternalSite(
                            "https://www.marriott.com/pt-br/hotels/lissi-sheraton-lisboa-hotel-and-spa/overview/"
                          )
                        }
                      >
                        Visitar Site
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
