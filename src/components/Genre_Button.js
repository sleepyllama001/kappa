import "./Genre_Button.css";
import React from "react";

export default function Genre(genre) {
    return (
        <div className={"genre_btn"} >
            <p>{genre.genre}</p>
        </div>
    )
}