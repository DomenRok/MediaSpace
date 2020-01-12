import React, {useEffect, useState} from "react";
interface GenreList {
    genreList: any
}

const GenreListIcons: React.FC<GenreList> = (props: any) => {
    if (props.genreList === null) return null;

    const genreList = props.genreList.results.map((element: any) => {
        return (
            <li key={element.id}>
                <img src={"images/genres/"+element.name.toLowerCase()+".png"} alt={element.name}/>
                <h6>{element.name}</h6>
            </li>
        );
    });

    return (
        <ul className="dashboard-genres-pro">
            {genreList}
        </ul>
    );
};

export default GenreListIcons;