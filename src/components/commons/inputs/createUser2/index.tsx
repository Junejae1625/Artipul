import styled from '@emotion/styled'
import { ChangeEvent } from 'react'

interface ICreateUserInputProps {
  type?: 'text' | 'password'
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string
  readonly?: boolean
}

const CreateUserInput = styled.input`
  outline: 0;
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #cccccc;
  font-size: 1.1rem;
  padding-top: 1rem;
  margin-bottom: 12px;
`

export default function CreateUser2(props: ICreateUserInputProps) {
  return (
    <CreateUserInput
      readOnly={props.readonly}
      defaultValue={props.defaultValue}
      type={props.type}
      onChange={props.onChange}
    />
  )
}
