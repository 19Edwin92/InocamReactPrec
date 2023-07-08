import React from "react";
import * as Styled from "./styled";
import Header from "./components/organism/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import IndexList from "./pages/IndexList";
import VelopertColor from './pages/VelopertColor'
import VelopertCounterContatiner from "./containers/VelopertCounter";
import DragandDrop1 from "./pages/DragandDrop1";
// import Kakao from "./pages/Kakao";
import StyledComponents from "./pages/StyledComponents";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Styled.Layout>
    <Routes>
      <Route path="/" element={<Header/>}>

        <Route index element={<Home/>}/>

        <Route path="velopertcolor" element={<VelopertColor />}/>
        <Route path="velopertcounter" element={<VelopertCounterContatiner/>}/>
        <Route path="draganddrop" element={<DragandDrop1/>}/>
        {/* <Route path="kakao" element={<Kakao/>}/> */}
        <Route path="styledcomponents" element={<StyledComponents/>}/>
        <Route path="detail" element={<IndexList/>}>
          <Route path=":id" element={<Detail/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </Styled.Layout>
  );
}

export default App;
