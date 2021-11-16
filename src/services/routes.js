import React from 'react'
import * as S from './style'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../pages/home";
import Album from "../pages/albuns";
import Photos from '../pages/albuns/photos';
import Posts from "../pages/posts";
import Comments from '../pages/posts/comments';
import Todo from "../pages/toDos/Todo";
import UserTasks from '../pages/toDos/usersTasks';

export default function MainRoutes() {
  return (
    <Router>
      <S.MenuContainer>
        <h3>framework </h3>
        <S.MenuBox>
          <S.MenuItem>
            <S.LinkItem to="/" >Home</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem>
            <S.LinkItem to="/Albuns">Albuns</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem>
            <S.LinkItem to="/Posts" >Posts</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem>
            <S.LinkItem to="/Users" >To Do</S.LinkItem>
          </S.MenuItem>
        </S.MenuBox>
      </S.MenuContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Albuns" element={<Album />}/>         
        <Route path="/Photos/:id" element={<Photos/>}/>       
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Comments/:id" element={<Comments/>}/> 
        <Route path="/Users" element={<UserTasks />} />
        <Route path="/Todo/:id" element={<Todo />} />
      </Routes>
    </Router>
  )
}
