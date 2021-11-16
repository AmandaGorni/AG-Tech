import React from "react";
import * as S from './style';

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../../services/api";


export default function Album() {

    const [album, setAlbum] = useState([]);
    useEffect(() => {
        api.get("/albums").then((res) => {
            setAlbum(res.data);
        });
    }, []);

    return (
        <>
            <div >
                <S.Title>Image Gallery</S.Title>
                <S.AlbumContainer>
                    {album.map((data, index) => {
                        return (
                            <S.AlbumBox key={index}>
                            <h3>Album #{data.id}</h3>
                            <h4 > {data.title}</h4>                    
                            <Link to={`/Photos/${data.id}`}>View more</Link>
                            </S.AlbumBox>);
                    })}
                </S.AlbumContainer>
            </div>);
        </>
    )
}