import { Navbar } from "components/Navbar";
import { Plant } from "types";
import { getPlantById } from "services/plant";
import { LoadingSpinner } from "components/LoadingSpinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PlantInfoSection } from "./PlantInfoSection";

export const PlantShowPage = () => {
  const { plantId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [plant, setPlant] = useState<Plant | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (plantId) {
        const response = await getPlantById({ id: plantId });
        const data = await response.json();
        console.log(data);
        setPlant(data);
      }
      setIsLoading(false);
    })();
  }, [plantId]);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>{plant && <PlantInfoSection plant={plant} />}</>
      )}
    </>
  );
};
