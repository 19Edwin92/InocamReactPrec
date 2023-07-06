### [과제] 숙련주차 과제 답

1. 추가하기 버튼을 클릭해도 추가한 아이템이 화면에 표시되지 않음. 
2. 추가하기 버튼 클릭 후 기존에 존재하던 아이템들이 사라짐.  
    - 먼저 `const dispatch = useDispatch()`를 호출해주고
    - 다음, `dispatch(addTodo(newTodo))`를 통해서 전역상태 관리소의 actionCreate를 호출
    - 다음, `todos` Reducer 부분, `case ADD_TODO`에 전달된 payload가 initialState의 todos에 추가되도록 반환문 수정

3. 삭제 기능이 동작하지 않음. 
    -`todos` Reducer 부분에 `deleteTodo`에 대한 case가 누락되어 있기에 추가
    
4. 상세 페이지에 진입 하였을 때 데이터가 업데이트 되지 않음.
    - `const todo = useSelector((state) => state.todos.todo);` 변경되지 않은 곳에서 state 호출 todo => todos 변경
    - 전체 todos의 배열에서 id와 일치하는 배열을 추출하고, 뷰에 적용

5. 완료된 카드의 상세 페이지에 진입 하였을 때 올바른 데이터를 불러오지 못함. 
    - `<StLink to={`/${index}`} key={todo.id}>`에 해당되는 경로로 이동하는 문제를
    - `<StLink to={`/${todo.id}`} key={todo.id}>` 해당 todo의 id 값으로 경로로 수정

6. 취소 버튼 클릭시 기능이 작동하지 않음.
    - `onToggleStatusTodo` 취소 시에, 해당 todo의 id를 가져가기 못함
    - `onToggleStatusTodo(todo.id)`를 추가 
    - 또한 `onClick={onToggleStatusTodo(todo.id)}` 즉시 호출시의 문제가 있어
    - `onClick={() => onToggleStatusTodo(todo.id)}`와 같이 올바르게 코드를 수정

- 나아가 전체적인 코드를 선언형으로 수정하기 위해, 클로저로 수정 

  ```jsx
    const onDeleteTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => () => {
    dispatch(toggleStatusTodo(id));
  };

  //
  <StButton
    borderColor="red"
    onClick={onDeleteTodo(todo.id)}
    children="삭제하기"
   />
  <StButton
    borderColor="green"
    onClick={onToggleStatusTodo(todo.id)}
    children={todo.isDone ? "취소!" : "완료!"}
  />
  ```  

  7. 과제를 마쳤다면 배포도 한번 해볼까요?
    - 