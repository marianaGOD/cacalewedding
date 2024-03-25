import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const center = {
  // coordenadas para a morada
  lat: 38.693806,
  lng: -9.431314,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div className="map">
      {isLoaded && (
        <>
          <GoogleMap
            mapContainerClassName="map_container"
            center={center}
            zoom={16}
          >
            <Marker
              position={center}
              onClick={() =>
                setSelectedMarker({
                  lat: center.lat + 0.0005,
                  lng: center.lng,
                })
              }
            />
            {selectedMarker && (
              <InfoWindow
                position={selectedMarker}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div>
                  <p className="marker-title">Catarina & Alexandre</p>
                  <p>R. Alto da Maceira, nº 2</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
          <p className="subtitle">Rua Alto da Maceira, nº 81, Cascais</p>
        </>
      )}
    </div>
  );
}
