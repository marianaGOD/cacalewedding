import Map from "../Components/Map";
import "../styles/BidDay.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import cake_icon from "../assets/day-timeline/cake_1.png"
import cocktail_icon from "../assets/day-timeline/cocktail_1.png"
import dinner_icon from "../assets/day-timeline/dinner_1.png"
import party_icon from "../assets/day-timeline/party_1.png"

export default function BidDay() {
  function openExternalSite(url) {
    window.open(url, "_blank");
  }

  const hotels = [
    {
      name: "Pestana Cascais",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/462808551.jpg?k=2890fd21fbc05393ce870dae1f1a04c9d279a4f83ce6e2bf1f80d0c8a11cce54&o=&hp=1",
      url: "https://ecommerce.pestana.com/pt/bookingstep1/?idtokenprovider=100378475&idchain=500659&nights=1&chainSelectorValue=38338&clientCodeStrictSearch=true&parties=WyB7CiAgImFkdWx0cyIgOiAyLAogICJjaGlsZHJlbiIgOiBbIF0KfSBd&lang=pt&hsri=02040&home=https%3A%2F%2Fecommerce.pestana.com%2F&currency=EUR&applyClubDiscount=true&checkin=07%2F09%2F2024&step=1",
    },
    {
      name: "Eurostar Cascais",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257634459.jpg?k=fa53d50cd0822ec9f6db0385deab4d660ba362d2ab5a3b20c66724318eca8ebb&o=&hp=1",
      url: "https://www.eurostarshotels.com.pt/eurostars-cascais/disponibilidade.html?utm_campaign=googlehpa_pt&id_hotel=H239&start=2024-04-17&utm_medium=cpc&guests[0][adults]=2&utm_source=googlehpa&td=m00ga05&end=2024-04-18&referer_code=GOOGLEHPA_SEO#monoHotelAvail/EUR",
    },
  ];

  return (
    <Container className="bigday-container">
      <Row className="mt-3">
        <Col xs={12}>
          <div className="planning bd-card">
            <h2>Plano do dia</h2>
            <div className="activities">
              <div className="activity">
                <img
                  src={cake_icon}
                  alt=""
                  className="timeline-img"
                />
                <p>17h00 Cerimónia</p>
              </div>

              <div className="activity">
                <img
                  src={cocktail_icon}
                  alt=""
                  className="timeline-img"
                />
                <p>18h30 Cocktail</p>
              </div>

              <div className="activity">
                <img
                  src={dinner_icon}
                  alt=""
                  className="timeline-img"
                  style={{
                    transform: "scale(0.9)",
                  }}
                />
                <p>20h30 Jantar</p>
              </div>

              <div className="activity">
                <img
                  src={party_icon}
                  alt=""
                  className="timeline-img"
                />
                <p>23h30 Festa</p>
              </div>
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
              {hotels.map((hotel) => (
                <Col sm={12} md={4} key={hotel} className="mb-3">
                  <Card>
                    <Card.Img variant="top" src={hotel.img} />
                    <Card.Body>
                      <Card.Title>{hotel.name}</Card.Title>
                      <Button
                        variant="custom"
                        onClick={() => openExternalSite(hotel.url)}
                      >
                        Disponibilidade
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
