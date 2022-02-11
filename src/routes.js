import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlanetsScreen from "./screams/planets";
import PlanetScreen from './screams/planet'
import NotFoundScreen from "./screams/notFound";

//pra nao precisar inserir o return, podemos usar parenteses na funcao
const Routs = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PlanetsScreen/>}/>
            <Route exact path='/Planet/:id' element={<PlanetsScreen/>}/> 
            <Route path='*'>
                <NotFoundScreen/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Routs;

/**
 * Sobre o erro react-router-dom v6 switch
 * 
 * https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
 */