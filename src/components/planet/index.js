import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../shared/gray_image";
import DescriptionWithLink from "../shared/description_with_link";
import Form from "./form";
import Planet from "./form"

import { useParams, useNavigate, Navigate } from 'react-router-dom';

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [planet, setPalnet] = useState({});
  const [navigate, setNavigate] = useState(false);

  let { id } = useParams();
  let history = useNavigate();

  useEffect(() => {
    getPlanets(id).then((data) => {
      setPlanets(data["data"]);
    }, error => {
        setNavigate(true);
    });
  }, []);

  const goToPlanets = () => {
    history.push('/');
  }

  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet])
  }

  if(navigate)
    return <Navigate to='/'/>

  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr/>
      <Form addPlanet={addPlanet}/>
      <hr />
      {planets.map((planet, index) => (
        <Planet
          id={planet.id}
          name={planet.name}
          description={planet.description}
          img_url={planet.img_url}
          link={planet.link}
          key={index}
        />
      ))}
      <button type="button" onClick={goToPlanets}>Voltar a lista</button>
    </Fragment>
  );
};

export default Planets;
