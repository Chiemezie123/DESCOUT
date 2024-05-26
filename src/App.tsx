import React from "react";
import "./App.css";
import MainRouter from "./router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <MainRouter />
      <ToastContainer />
    </>
  );
}

export default App;