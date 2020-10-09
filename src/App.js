import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
    useEffect(() => {
        //this code here...... fires when the app.js loads
        db.collection("todos")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setTodos(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })));
            });
    }, []);

    const addTodo = (event) => {
        //this will fire off when we click the button
        event.preventDefault(); // will stop the refresh

        db.collection("todos").add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput(""); // clear up the input after hitting add todo button
    };

    return (
        <div className='App'>
            <h1>Hello Audiences 💞💕!</h1>
            <form>
                <FormControl>
                    <InputLabel>💖💝 Write A Todo</InputLabel>
                    <Input value={input} onChange={(event) => setInput(event.target.value)} />
                </FormControl>

                <Button disabled={!input} variant='contained' color='secondary' onClick={addTodo} type='submit'>
                    Add Todo
                </Button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <Todo todo={todo} />
                    // <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
