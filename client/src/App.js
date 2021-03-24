import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import logo from "./logo.svg";
import "./App.css";

const ENDPOINT = "http://localhost:5000/";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          It's <time dateTime={response}>{response}</time>
        </p>
      </header>
    </div>
  );
}

export default App;
