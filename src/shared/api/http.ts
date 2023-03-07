import { ofetch } from "ofetch"

export const http = ofetch.create({
  baseURL: "/api",
  
  onResponseError: ({ response }) => {
    console.log(response)
  },
})
