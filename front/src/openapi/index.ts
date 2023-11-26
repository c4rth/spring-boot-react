import {Api} from "./Api.ts";

export const apiSpringAad = new Api({
    baseURL: "http://localhost:8080",
    headers: {
        "x-api-key": "spring-boot-react",
    },
});