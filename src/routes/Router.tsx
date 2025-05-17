import {useRoutes} from "react-router-dom";
import PortfolioList from "../pages/PortfolioList";
import {JSX} from "react";
import PortfolioDetail from "../pages/PortfolioDetail.tsx";

export default function Router() {
    const routes: { path: string; element: JSX.Element }[] = [
        {
            path: '/',
            element: <PortfolioList/>,
        },
        {
            path: '/:id',
            element: <PortfolioDetail/>,

        }
    ];
    return useRoutes(routes);
}
