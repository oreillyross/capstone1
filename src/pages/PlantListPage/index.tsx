import { RedirectIfLoggedOut } from "components/RedirectIfLoggedOut";
import { Navbar } from "components/Navbar";
import { useEffect } from "react";
import { getPlants } from "services/plant";

export const PlantListPage = () => {
    useEffect(() => {
        (async () => {
            const response = await getPlants();
            const data = await response.json();
            console.log(data)
        })();
    }, []);

    return (
        <RedirectIfLoggedOut>
            <div>
                <Navbar />
            </div>
        </RedirectIfLoggedOut>
    );
};
