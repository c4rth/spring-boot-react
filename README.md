# Spring + React

_This repo is for experimentation and exploring new ideas_

## Spring app
Sadly, must be stuck to Spring Boot 2.7.x

Generate Excel:
- [fastexcel](https://github.com/dhatim/fastexcel)

Fake data:
- [javafaker](https://github.com/DiUS/java-faker)

### TODO
- improve web security (csrf, ...)
- protect APIs 


## environment variables
AZURE_TENANT_ID="_Specifies your Active Directory ID_"\
AZURE_CLIENT_ID="_Specifies your App Registration's Application ID_"\
AZURE_CLIENT_SECRET="_Specifies your App Registration's secret key_"

## React app
UI:
- [@mui/material](https://mui.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest/)
- [@tanstack/react-table](https://tanstack.com/table/v8)

Generate Typescript from OpenApi:
- [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)

### build
Build the React app and copy to `./src/main/resources/static`

in `front` directory
```
npm run build
```
