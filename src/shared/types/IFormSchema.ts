import type { FormItemProps, InputProps, SelectProps } from "naive-ui"

export type InputType = "input" | "select"
export interface IRenderOptions {
  type: InputType
  label: string
  inputProps?: InputProps
  selectProps?: SelectProps
}

export interface IFormSchema extends FormItemProps {
  key: string
  renderOptions: IRenderOptions
}
