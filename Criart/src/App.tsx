import './index.css'

import { Cabecalho } from '../components/Cabecalho'
import { Inicio } from '../components/Inicio'
import { Sobre } from '../components/Sobre'
import { Eventos } from '../components/Eventos'
import { Galeria } from '../components/Galeria'
import { Depoimentos } from '../components/Depoimentos'
import { Rodape } from '../components/Rodape'


export function App() {
  return (
    <main>
      
      {/* Menu de navegação entrará aqui após o desenvolvimento */}
      
      <Cabecalho />
      <Inicio />
      <Sobre />
      <Eventos />
      <Galeria />
      <Depoimentos />
      <Rodape />

    </main>
  );
}
 