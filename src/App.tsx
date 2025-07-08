import { useEffect } from "react";
import "./App.css";
import { useLocationStore } from "./store/location_store";
import StationByLocation from "./components/StationByLocation";

function App() {
  const setLocation = useLocationStore((state) => state.setLocation);
  const location = useLocationStore((state) => state.location);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = pos.coords;
        // setLocation({
        //   lat: coords.latitude,
        //   lng: coords.longitude,
        // });
        setLocation([coords.latitude, coords.longitude]);
      },
      (err) => {
        console.error("No se pudo obtener la ubicación:", err);
      }
    );
  }, []);

  return (
    <>
      {location.length > 0 ? (
        <StationByLocation />
      ) : (
        <h1 className="container text-center font-bold text-4xl mt-10">
          Dejate de puterias y activa la localicacion cara de verga 🤬
        </h1>
      )}
    </>
  );
}

export default App;
