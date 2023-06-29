import React from "react";
import * as Styled from "./styled";
import Header from "./components/organism/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import IndexList from "./pages/IndexList";
import VelopertCounter from "./pages/VelopertCounter";

function App() {
  return (
    <Styled.Layout>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="/velopertcounter" element={<VelopertCounter/>}/>
        <Route path=":id" element={<Detail/>}>
          <Route index element={<IndexList/>}/>
        </Route>
      </Route>
    </Routes>
    </Styled.Layout>
  );
}

export default App;