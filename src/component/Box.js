import React from "react";

const Box = (props) => {
    let result;
    if (
        props.title === "Computer" &&
        props.result !== "tie" &&
        props.result !== ""
    ) {
        result = props.result === "win" ? "lose" : "win";
    } else {
        result = props.result;
    } if (props.title === "Computer"){
        // console.log("computer", result);
    }
    // console.log("props", props);
    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <h2>{props.item && props.item.name}</h2>
            <img className="item-img"
                 alt={props.item && props.item.describe}
                 src={props.item && props.item.img}
            />
            <h2>{result}</h2>
        </div>
    );
};

export default Box;
