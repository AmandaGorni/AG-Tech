import React from "react";
import * as S from './style'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


import api from "../../services/api";

export default function Comments() {

    const [comments, setComments] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        api.get(`/comments?postId=${id}`).then((res) => {
            setComments(res.data);
        });
    }, [])

    return (
        <div className="container p-4">
            <S.Title style={{fontSize:"48px"}}>Comments Post #{id}</S.Title>
            <S.PostContainer>
                {comments.map((item, index) => (
                    <S.PostBox key={index}>
                    <h3>#{item.id}</h3>                
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Coment: {item.body}</p>
                    </S.PostBox>
                ))}
            </S.PostContainer>
        </div>
    )
}

