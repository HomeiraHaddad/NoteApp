import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./main-layout";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/not-found";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>   
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </MainLayout> 
    </BrowserRouter>
  );
}

export default App;
