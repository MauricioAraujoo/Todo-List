import { useState } from "react";
import { Area, Container, Header } from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

export const App = () => {
  //o useState vai receber um arrey de Itens
  const [list, setList] = useState<Item[]>([]);

 /**
   * Estou criando uma nova matriz, copiando a matriz antiga para ela e adicionando uma nova tarefa ao final da nova matriz
   * @param {string} taskName - string - este é o nome da tarefa que o usuário irá inserir.
  */
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea onEnter={handleAddTask} />

        {/* mapeando list  */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  );
};
