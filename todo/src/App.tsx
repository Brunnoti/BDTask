import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item'

const App = ()  => { 
  const [list,setlist] = useState<Item[]>([
      {id:1, name:'comprar o pão na padaria', done: false},
      {id:1, name:'comprar um bolo na padaria', done: false},
  ]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>
          B D Task | Lista de Tarefas
        </C.Header>
        {list.map((item, index)=>(
          <div>{item.name}</div>
        ))}
      </C.Area>
      
    </C.Container>

  );
}

export default App;