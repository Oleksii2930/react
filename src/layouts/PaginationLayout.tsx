import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";
import {Outlet} from "react-router-dom";

export const PaginationLayout = () => {
    return (
        <>
            <Outlet/>
            <PaginationComponent/>

        </>
    );
};