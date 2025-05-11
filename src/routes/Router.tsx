import {useRoutes} from "react-router-dom";
import PortfolioList from "../pages/PortfolioList";
import {JSX} from "react";

export default function Router() {
    const routes: { path: string; element: JSX.Element }[] = [
        {
            path: '/',
            element: <PortfolioList/>,
        }
    ];
    return useRoutes(routes);
}
