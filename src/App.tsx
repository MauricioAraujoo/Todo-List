import { useState } from 'react'
import { Area, Container, Header } from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'

export const App = () => {
    //o useState vai receber um arrey de Itens
    const [list, setList] = useState<Item[]>([
      {id: 1, name: 'comprar comida', done: true},
      {id: 2, name: 'comprar um bolo', done: false}
    ]);

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        
          {/* mapeando list  */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  )
}