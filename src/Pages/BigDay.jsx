import Map from "../Components/Map";
import "../styles/BidDay.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function BidDay() {
  function openExternalSite(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="bigday-container">
      <div className="planning">
        <h2>Plano do dia</h2>
        <div className="activities">
          <p>17h00 Cerimónia</p>
          <p>18h30 Cocktail</p>
          <p>20h30 Jantar</p>
          <p>23h30 Festa</p>
        </div>
      </div>

      <div className="bd-maps">
        <h2>Como chegar:</h2>
        <Map />
      </div>

      <div className="parking">
        <h2>Estacionamento</h2>
      </div>

      <div className="hotels">
        <div>
          <h2>Alojamento</h2>
        </div>
        <div className="cards">
          <Card style={{ width: "18rem" }}>
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
          <Card style={{ width: "18rem" }}>
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
          <Card style={{ width: "18rem" }}>
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
        </div>
      </div>
    </div>
  );
}
