import React from "react";
import * as S from "./style"

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../../services/api" ;

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        api.get(`/users/${id}/todos`).then((res) => {
            setTodos(res.data);
        });
    }, []);

    const handleRemove = (id) => {
        setTodos(
          todos.filter((item) => {
            return item.id !== id;
          })
        );
      };
    return (
        <>
            <S.Title>Tasks User #{id}</S.Title>
            <S.ListContainer>
                {todos.map((todo,index) =>(
                    <S.ListWrapper>
                    <li 
                    key={todo.index}
                    >#{todo.id}</li>
                    <li key={todo.id}>{todo.title}</li>
                    <S.ListBox>
                    <input
                    type="checkbox"
                    checked={todo.completed}   
                    />
                    <button onClick={() => handleRemove(todo.id)}> X</button>
                    </S.ListBox>
                    </S.ListWrapper>
                ))}
            </S.ListContainer>
        </>
    )
}

