import React, { useRef, useState } from "react";
import { Layout, StBtn } from "./customStyled";
import { styled } from "styled-components";

function CustomInput() {
  const nameRef = useRef(null)
  const priceRef = useRef(null)

  const [inputValue, setName] = useState(
    {
      name: "",
      price: "",
    }
  );


  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "price") {
      const validity = value.replace(/[^0-9]/g, "");
      const formattedValue = new Intl.NumberFormat().format(validity);
      //언어에 맞는 숫자 서식을 지원하는 객체의 생성자
      setName({ ...inputValue, [name]: formattedValue });
    } else {
      setName({ ...inputValue, [name]: value });
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { name, price } = inputValue;
    if (!name && !price) {
      alert("이름과 가격을 입력하세요.")
    } else if (!name) {
      alert("이름을 입력하세요.")
      nameRef.current.focus()
    } else if (!price) {
      alert("가격을 입력하세요.")
      priceRef.current.focus()
    } else if (name && price !== "0") {
      alert(`{name : ${inputValue.name}, price : ${inputValue.price}}`);
      // alert(JSON.stringify(inputValue))
      setName({
        name: "",
        price: "",
      });
    }
  };

  return (
    <Layout direction="column">
      <h2>Input</h2>
      <form onSubmit={onSubmitHandler}>
        <Layout $gap="30px" style={{ alignItems: "end" }}>
          <Layout direction="column" $gap="4px">
            <label>이름</label>
            <StlyedInput
              ref={nameRef}
              type="text"
              value={inputValue.name}
              name="name"
              onChange={onChangeHandler}
              placeholder="20자 이내로 입력해주세요."
              maxLength={20}
            />
          </Layout>
          <Layout direction="column" $gap="4px">
            <label>가격</label>
            <StlyedInput
              ref={priceRef}
              type="text"
              value={inputValue.price}
              name="price"
              onChange={onChangeHandler}
              placeholder="숫자만 입력해주세요."
            />
          </Layout>
          <StBtn type="small" children="저장" />
        </Layout>
      </form>
    </Layout>
  );
}

export default CustomInput;

const StlyedInput = styled.input`
  height: 40px;
  width: 200px;
  outline-style: none;
  border-radius: 8px;
  padding: 0 12px;
  border: 1px solid rgb(51, 51, 51);
`;
