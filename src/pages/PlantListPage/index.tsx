import { RedirectIfLoggedOut } from "components/RedirectIfLoggedOut";
import { Navbar } from "components/Navbar";
import { useEffect, useState } from "react";
import { getPlants } from "services/plant";
import { PlantItem } from "./PlantItem";
import { LoadingSpinner } from "components/LoadingSpinner";

export const PlantListPage = () => {
    const [isLoading, setLoading] = useState(false);
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await getPlants();
            const data = await response.json();
            setPlants(data);
            setLoading(false);
        })();
    }, []);
   
    
    return (
        <RedirectIfLoggedOut>
            
                <div className="min-h-screen bg-emerald-50">
                <Navbar />
                
                {isLoading ? (
                    <LoadingSpinner/>
                ) : (
                    <div className="flex justify-center">
                        <div className="flex flex-wrap w-full max-w-4xl my-20">
                            <div className="font-playfair text-emerald-700 text-3xl mb-4 pl-4">
                                Plants in stock
                            </div>
                            <div className="flex flex-wrap justify-center">
                                {plants.map((plant, idx) => (
                                    <PlantItem key={idx} plant={plant} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                </div>
            
        </RedirectIfLoggedOut>
    );
};
