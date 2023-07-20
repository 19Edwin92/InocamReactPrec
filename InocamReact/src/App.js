import React from "react";
import Header from "./components/organism/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import IndexList from "./pages/IndexList";
import VelopertColor from './pages/VelopertColor'
import VelopertCounterContatiner from "./containers/VelopertCounter";
import DragandDrop1 from "./pages/DragandDrop1";
import Kakao from "./pages/Kakao";
import StyledComponents from "./pages/StyledComponents";
import Animaition from "./pages/Animaition";
import Interactive from "./pages/Interactive";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="velopertcolor" element={<VelopertColor />}/>
        <Route path="velopertcounter" element={<VelopertCounterContatiner/>}/>
        <Route path="draganddrop" element={<DragandDrop1/>}/>
        <Route path="kakao" element={<Kakao/>}/>
        <Route path="styledcomponents" element={<StyledComponents/>}/>
        {/* <Route path="animaition" element={<Animaition/>}/> */}
        <Route path="detail" element={<IndexList/>}>
          <Route path=":id" element={<Detail/>}/>
        </Route>
      </Route>
      <Route path="/interactive" element={<Interactive />}/>
    </Routes>

  );
}

export default App;
