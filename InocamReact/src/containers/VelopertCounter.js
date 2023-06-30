import VelopertCounter from '../pages/VelopertCounter'
import * as actions from '../redux/modules/reducervelopertCounter'
import {connect} from 'react-redux'

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
  number: state.velopertCounterReducer.counter,
  color: state.velopertCounterReducer.color
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color= getRandomColor();
    dispatch(actions.set_color(color))
  }
})

// VelopertCounter 컴포넌트의 Container 컴포넌트
// VelopertCounter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const VelopertCounterContatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(VelopertCounter)

export default VelopertCounterContatiner

// src/utils/index.js 
function getRandomColor() {
  const colors = [
      '#495057',
      '#f03e3e',
      '#d6336c',
      '#ae3ec9',
      '#7048e8',
      '#4263eb',
      '#1c7cd6',
      '#1098ad',
      '#0ca678',
      '#37b24d',
      '#74b816',
      '#f59f00',
      '#f76707'
  ];

  // 0 부터 12까지 랜덤 숫자
  const random = Math.floor(Math.random() * 13);

  // 랜덤 색상 반환
  return colors[random];
}