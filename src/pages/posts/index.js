import React from "react";
import * as S from "./style";
import Loading from "../../components/loading/loading";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../../services/api" ;

export default function Posts() {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        api.get("/posts").then((res) => {
            setPosts(res.data);
        });
    }, []);
    
    const PostList = ({ alldata }) => {
        return (
            <S.PostContainer>
                {alldata.map((post) =>(
                    <S.PostBox >
                    <h3 
                    key={post.id}
                    >{post.title}
                    </h3>
                    <p 
                    key={post.id}
                    >{post.body}
                    </p>
                    <Link to={`/Comments/${post.id}`}>comments</Link>
                    </S.PostBox>
                ))}
            </S.PostContainer>
        )
    }
    return (
        <>
          <S.Title>Posts</S.Title>
          {posts ? <PostList alldata={posts} /> : <Loading />}
        </>
    )
}