import { useEffect, useState, type FC } from "react";
import { useLocationStore } from "../store/location_store";
import type { GasStationResponse, Place } from "../interfaces/gas_response";

interface StationByLocationProps {}
const StationByLocation: FC<StationByLocationProps> = ({}) => {
  const location = useLocationStore((state) => state.location);
  const [places, setPlaces] = useState<Place[]>([]);

  const fetchBylocation = async () => {
    try {
      const response = await fetch("http://localhost:3000/location/coords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location }),
      });
      const data: GasStationResponse = await response.json();
      console.log(data, "DATA");
      setPlaces(data.places);
    } catch (error) {
      console.log(error, "NO FUE POSIBLE CARGAR DATA");
    }
  };

  useEffect(() => {
    if (location.length > 0) {
      fetchBylocation();
    }
  }, [location]);

  return (
    <>
      <div className="container mx-auto p-6 text-center mt-10">
        <h1 className="text-3xl font-semibold">Gasolineras cercanas a ti 😘</h1>

        <div className="grid grid-cols-4 mt-10 space-y-5">
          <p>nombre</p>
          <p>diesel</p>
          <p>regular</p>
          <p>premium</p>

          {places.map((place) => (
            <>
              <p key={place.place_id + place.name}>{place.name}</p>
              <p key={place.place_id + place.distance}>
                {place?.diesel ?? "N/A"}
              </p>
              <p key={place.place_id + place.latitude}>
                {place?.regular ?? "N/A"}
              </p>
              <p key={place.place_id + place.longitude}>
                {place?.premium ?? "N/A"}
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default StationByLocation;
