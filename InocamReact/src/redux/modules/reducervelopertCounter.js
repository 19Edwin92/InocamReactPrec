// Action Key
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COLOR = "SET_COLOR";
const CREATE = "CREATE";
const REMOVE = "REMOVE"


export const increment = (payload) => {
  return {
    type : INCREMENT,
    payload
  }
} // payload= index

export const decrement = (payload) => {
  return {
    type : DECREMENT,
    payload
  }
} // payload= index

export const set_color = (payload) => {
  return {
    type : SET_COLOR,
    payload
  }
} // {index, color}

export const create = (payload) => {
  return {
    type:CREATE,
    payload
  }
} // payload = color

export const remove = () => {
  return {
    type:REMOVE,
  }
} 

const initialState = {
  counters : [
    {
      color:"black",
      counter : 0
    }
  ]
}

const velopertCounterReducer = (state=initialState, action) => {
  switch (action.type) {
    case CREATE:
      console.log(action.payload)
      return  {...state,
        counters: [
          ...state.counters, {color:action.payload, counter:0}
        ]}
    case REMOVE:
      return {...state,
        counters: [...state.counters.slice(0, state.counters.length-1)]
      }
    case INCREMENT: 
      return {...state,
        counters: state.counters.map((counter, index) =>
          index === action.payload ? { ...counter, counter: counter.counter + 1 } : counter
        ),
      };
    case SET_COLOR:
      return {...state,
        counters: state.counters.map((counter, index) =>
          index === action.payload.id ? { ...counter, color:action.payload.color } : counter
        ),
      };    
    // case DECREMENT:
    //   return {
    //     counters: [
    //       ...state.slice(0, action.index), {
    //         ...state[action.index], counter:state[action.index].counter -1
    //       }
    //     ]
    //   }
    default:
      return state
  }
}

export default velopertCounterReducer

/*
  카운터를 추가/삭제하는 기능을 더해보자. 
  1) CREARE, REMOVE 를 추가하자. 

*/