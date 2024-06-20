import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from "../../shared/routes";
import DashboardPage from "../../pages/dashboard";
import {Layout} from "../layout";
import {PokemonDetailsPage} from "../../pages/pokemon-details";
import {NotFoundPage} from "../../pages/not-found";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.HOME} element={<Layout />}>
                    <Route path={routes.HOME} element={<DashboardPage />} />
                    <Route path={routes.POKEMONS} element={<DashboardPage />} />
                    <Route path={routes.POKEMON_DETAIL} element={<PokemonDetailsPage />} />
                    <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
