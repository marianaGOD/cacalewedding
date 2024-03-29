import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
import parking from "../assets/icons/carpark-2.png";

const mapCenter = {
  lat: 38.694708,
  lng: -9.43649,
};

const wedding = {
  lat: 38.693806,
  lng: -9.431314,
};

const parking_1 = {
  lat: 38.694141,
  lng: -9.433096,
};

const parking_2 = {
  lat: 38.692466,
  lng: -9.433838,
};

const parking_3 = {
  lat: 38.695582,
  lng: -9.445192,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
  });

  const [selectedMarker, setSelectedMarker] = useState(wedding);
  const [parking1Marker, setParking1Marker] = useState(null);
  const [parking2Marker, setParking2Marker] = useState(null);
  const [parking3Marker, setParking3Marker] = useState(null);

  return (
    <div className="map-container">
      {isLoaded && (
        <>
          <GoogleMap
            mapContainerClassName="maps-embeded"
            center={mapCenter}
            zoom={15}
          >
            {/*Wedding Marker */}
            <Marker
              position={wedding}
              onClick={() => setSelectedMarker(wedding)}
            />
            {/*Parking 1 Marker */}
            <Marker
              position={parking_1}
              icon={parking}
              onClick={() => setParking1Marker(parking_1)}
            />
            {/*Parking 2 Marker */}
            <Marker
              position={parking_2}
              icon={parking}
              onClick={() => setParking2Marker(parking_2)}
            />
            {/*Parking 3 Marker */}
            <Marker
              position={parking_3}
              icon={parking}
              onClick={() => setParking3Marker(parking_3)}
            />

            {selectedMarker && (
              <InfoWindow
                position={wedding}
                onCloseClick={() => setSelectedMarker(null)}
                options={{
                  pixelOffset: new window.google.maps.Size(0, -30),
                }}
              >
                <div>
                  <p className="marker-title">Catarina & Alexandre</p>
                  <p>R. Alto da Maceira, nº 81</p>
                </div>
              </InfoWindow>
            )}
            {parking1Marker && (
              <InfoWindow
                position={parking_1}
                onCloseClick={() => setParking1Marker(null)}
                options={{
                  pixelOffset: new window.google.maps.Size(0, -30),
                }}
              >
                <div>
                  <p className="marker-title">Estacionamento #1</p>
                  <p>### Descrição do Estacionamento ###</p>
                </div>
              </InfoWindow>
            )}
            {parking2Marker && (
              <InfoWindow
                position={parking_2}
                onCloseClick={() => setParking2Marker(null)}
                options={{
                  pixelOffset: new window.google.maps.Size(0, -30),
                }}
              >
                <div>
                  <p className="marker-title">Estacionamento #2</p>
                  <p>### Descrição do Estacionamento ###</p>
                </div>
              </InfoWindow>
            )}
            {parking3Marker && (
              <InfoWindow
                position={parking_3}
                onCloseClick={() => setParking3Marker(null)}
                options={{
                  pixelOffset: new window.google.maps.Size(0, -30),
                }}
              >
                <div>
                  <p className="marker-title">Estacionamento #3</p>
                  <p>### Descrição do Estacionamento ###</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </>
      )}
    </div>
  );
}
