import React, {useState} from 'react';
import axios from "axios";
import './App.css';
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import {UserProfile} from "./UserProfile";
import {User} from "./types/user";

function App() {

    const [todos, setTodos] = useState<Array <TodoType>>([]);

    const onClickFetchData = () => {
        axios
            .get<Array <TodoType>>("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setTodos(res.data);
        });
    };

    const user: User = {
        name: "hoge",
        hobbies: ["movie", "game"],
    }

    return (
    <div className="App">
      <button onClick={onClickFetchData}>data-get</button>
        {todos.map((todo) => (
              <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
        ))}
        <Text color="red" fontSize="18px" />
        <UserProfile user={user} />
    </div>
  );
};

export default App;
