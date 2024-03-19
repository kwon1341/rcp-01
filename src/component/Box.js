import React from "react";

const Box = (props) => {
    console.log("props", props);
    return (
        <div className="box">
            <h1>{props.title}</h1>
            <img className="item-img"
                 alt="imgs"
                 src={props.item && props.item.img}
            />
            {/*<h2>{props.title}</h2>*/}
            <h2>result</h2>
        </div>
    )
}

export default Box
