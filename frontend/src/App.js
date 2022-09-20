import React, { useEffect, useState } from "react";
import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import {io} from "socket.io-client";

const App = () => {

  const url = 'http://localhost:5000';
  const [socket, setSocket] = useState(io(url, {autoConnect: false}));

  useEffect(() => {
    socket.connect();
  }, [])
  

  return <BrowserRouter>
  <Router>
    <Route path="/Home" component={<Home socket={socket}></Home>} />
    <Route path="/Chat" component={<Chat socket={socket}></Chat>} />
  </Router>
  </BrowserRouter>
};

export default App;