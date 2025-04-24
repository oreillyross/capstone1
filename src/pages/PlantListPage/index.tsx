import { RedirectIfLoggedOut } from "components/RedirectIfLoggedOut";
import { Navbar } from "components/Navbar";

export const PlantListPage = () => {
    return (
        <RedirectIfLoggedOut>
            <div>
                <Navbar />
            </div>
        </RedirectIfLoggedOut>
    );
};
