import React, {Fragment} from "react";
import GrayImg from "../../shared/gray_image";
import DescriptionWithLink from "../../shared/description_with_link";

import { Link } from "react-router-dom";

const Planet = (props) => {

    let title
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
    title = <h4>{props.name}</h4>

    return(
        <div>
            
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <Link to={`/planet/${props.id}`}></Link>
        </div>
    )
}

export default Planet;