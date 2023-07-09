import axios from "axios";

export const instance = axios.create({
  baseURL:process.env.REACT_APP_SERVERKEY1
}) // todos // 인스턴스 클래스(axios.create 메소드를 통해서)의 결과로 생성된 객체(하나의 baseURL 객체)를 인스턴스 불러요. 
