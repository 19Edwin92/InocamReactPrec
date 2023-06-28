import { ChangeEvent } from "react"

export type InputChangeEvent = ChangeEvent<HTMLInputElement>
export type FormSubmitEvent = SubmitEvent<HTMLElement>

export type FormInput = {
  title:string;
  content:string;
}

export type TodoList = FormInput & {
  id: number;
  state: boolean;
}