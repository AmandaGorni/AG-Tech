import React from 'react'
import * as S from "./style"

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import api from "../../services/api";

export default function ToDo() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api.get("/users").then((res) => {
            setTasks(res.data);
        });
    }, []);


    return (
        <S.UserContainer>
            {tasks.map((allTodo, index) => {
                return (
                    <S.UserCard key={index}>
                        <h3>User #{allTodo.id}</h3>
                        <h2>{allTodo.username}</h2>
                        <Link to={`/Todo/${allTodo.id}`}>To Do</Link>
                    </S.UserCard>
                );
            })}
        </S.UserContainer>
    )
}
