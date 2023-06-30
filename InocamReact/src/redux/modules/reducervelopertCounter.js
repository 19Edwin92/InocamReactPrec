// Action Key
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COLOR = "SET_COLOR";

export const increment = () => {
  return {
    type : INCREMENT
  }
}

export const decrement = () => {
  return {
    type : DECREMENT
  }
}

export const set_color = (payload) => {
  return {
    type : SET_COLOR,
    payload
  }
}

const initialState = {
  counter : 0,
  color:"black"
}

const velopertCounterReducer = (state=initialState, action) => {
  switch (action.type) {
    case INCREMENT: 
      return {...state,counter: state.counter + 1};
    case DECREMENT:
      return {...state,counter: state.counter - 1}; 
    case SET_COLOR:
      return {...state,color: action.payload};        
    default:
      return state
  }
}

export default velopertCounterReducer