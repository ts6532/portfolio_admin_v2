import { ofetch } from "ofetch"

export const http = ofetch.create({
  baseURL: "/api",
  onResponseError: ({ request, options, response }) => {
    console.log(response)
  },
})
