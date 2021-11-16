import React from "react";
import * as S from './style'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../../services/api";

export default function Photos() {

    const [photos, setPhotos] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        api.get(`/photos?albumId=${id}`).then((res) => {
            setPhotos(res.data);
        });
    }, [])

    return (
        <div className="container p-4">
            <S.Title>Album #{id}</S.Title>
            <S.AlbumContainer>
                {photos.map((item, index) => (
                    <S.AlbumImg key={index} backImg={item.url}>
                    <h3>#{item.id}</h3>                
                    <h3>{item.title}</h3>
                    </S.AlbumImg>
                ))}
            </S.AlbumContainer>
        </div>
    )
}
