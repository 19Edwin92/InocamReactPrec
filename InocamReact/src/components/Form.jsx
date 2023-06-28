import React from 'react'
import * as Styled from '../styled'

function Form({onSubmit, titlevalue, contentvalue, onChangeInput}) {
  return (
    <Styled.Form onSubmit={onSubmit}>
            <fieldset>
              <legend>Todo-Title</legend>
              <input
                type="text"
                value={titlevalue}
                onChange={(e) => onChangeInput(e, "title")}
              />
            </fieldset>
            <fieldset>
              <legend>Todo-content</legend>
              <input
                type="text"
                value={contentvalue}
                onChange={(e) => onChangeInput(e, "content")}
              />
            </fieldset>
            <input type="submit" value="추가하기" />
          </Styled.Form>
  )
}

export default Form