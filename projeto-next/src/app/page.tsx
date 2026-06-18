import styled from "styled-components";
import Card from "./esitlos/components/Card";



const Botao = styled.button`
  background-color: royalblue;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: darkblue;
  }
`;

const nome = 'Bruno Henrique'
const canal = 'Bruno Rataque'

function retnome() {
  return nome
}

function cnl() {
  return canal
}

function Youtube() {
  return (

    <div className='flex justify-between'>
      <h1>Ola {retnome()} seja bem-vindo o canal do youtube</h1>
      <p>Quero falar uma coisa APAGAR O CANAL {cnl()}.....BRUNO PORRA</p>



    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Youtube />
      <Botao>Apagar a conta aí</Botao>
      <Card />
    </div>
  )
}



