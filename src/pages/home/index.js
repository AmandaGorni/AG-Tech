import React from 'react'
import * as S from "./style"



export default function Home() {
    return (
        <>
            <S.Title>
                <h1>AG <span>TECH</span> </h1>
            </S.Title>
            <S.Instructions>
            <h3>Linha de aprendizado:</h3>
            <p>Aplicação Web que irá utilizar as listagens de uma API Rest.</p>
            <p>Esta aplicação deve conter os menus e/ou páginas: POSTAGENS  ALBUNS TO-DOs </p>
            <p>A API a ser utilizada está publicada em <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a></p>
            <p>Utilizar React para desenvolver a aplicação.</p>
            </S.Instructions>
        </>
    )
}
