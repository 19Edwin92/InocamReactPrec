import { css } from "styled-components";

export const theme = {
  color : {
    green : "#559A81",
    pink:"#EDB2A1",
    blue: "#4B89DC",
    /* --- --- --- --- --- */
    activeGreen:"#386554",
    activePink:"#87655C",
    activeBlue:"#203A5E",
    /* --- --- --- --- --- */
    fontPink:"#CB6058",
    fontBlue:"#0D1828"
  },

  btnsize : {
    primary : css`
      width:200px;
      height:50px;`,
    medium : css`
      width:135px;
      height:45px;`,
    small : css`
      width:100px;
      height:40px;`
  },
  
  modalsize : {
    primary : css`
      width:500px;
      height:300px;
    `,
    medium : css`
      width:300px;
      height:200px;
    `
  }
}

