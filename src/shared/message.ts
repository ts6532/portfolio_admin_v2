import type { MessageProviderProps } from "naive-ui"
import { createDiscreteApi } from "naive-ui"

const messageProps: MessageProviderProps = {
  placement: "top-right",
  duration: 3000,
}
export const { message } = createDiscreteApi(["notification"], {
  messageProviderProps: messageProps,
})
