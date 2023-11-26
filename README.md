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

## Run Configuration

### Environment variables
AZURE_TENANT_ID="_Specifies your Active Directory ID_"\
AZURE_CLIENT_ID="_Specifies your App Registration's Application ID_"\
AZURE_CLIENT_SECRET="_Specifies your App Registration's secret key_"

## IntelliJ run file
Run npm script 'build' [front\package.json]

```xml
<component name="ProjectRunConfigurationManager">
    <configuration default="false" name="SpringBootReactApplication" type="SpringBootApplicationConfigurationType" factoryName="Spring Boot">
        <envs>
            <env name="AZURE_LOG_LEVEL" value="VERBOSE" />
            <env name="AZURE_TENANT_ID" value="..." />
            <env name="AZURE_CLIENT_ID" value="..." />
            <env name="AZURE_CLIENT_SECRET" value="..." />
        </envs>
        <module name="spring-boot-react" />
        <option name="SPRING_BOOT_MAIN_CLASS" value="org.carth.springreact.SpringBootReactApplication" />
        <method v="2">
            <option name="Make" enabled="true" />
            <option name="NpmBeforeRunTask" enabled="true">
                <package-json value="$PROJECT_DIR$/front/package.json" />
                <command value="run" />
                <scripts>
                    <script value="build" />
                </scripts>
                <node-interpreter value="project" />
                <envs />
            </option>
        </method>
    </configuration>
</component>
```

## React app
UI:
- [@mui/material](https://mui.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest/)
- [@tanstack/react-table](https://tanstack.com/table/v8)

Generate Typescript from OpenApi:
- [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)

### Build
In `front` directory:
```
npm run build
```
Build the React app and copy to `./src/main/resources/static`
