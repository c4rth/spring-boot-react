import {Button, Container, Stack} from '@mui/material';
import {useState} from "react";
import {UserAvatar} from "../components/UserAvatar.tsx";
import Typography from "@mui/material/Typography";
import {apiSpringAad} from "../openapi";
import {DirectoryObjectCollectionWithReferencesPage, OidcUser, ProfilePhoto, User} from "../openapi/data-contracts.ts";
import {AxiosResponse} from "axios";

export const ProfileContent = () => {

    const [dataMe, setDataMe] = useState<User | null>(null);
    const [dataPrincipal, setDataPrincipal] = useState<OidcUser | null>(null);
    const [dataProfilePhoto, setDataProfilePhoto] = useState<ProfilePhoto | null>(null);
    const [dataMemberOf, setDataMemberOf] = useState<DirectoryObjectCollectionWithReferencesPage | null>(null);
    const [dataPhoto, setDataPhoto] = useState<string | null>(null);

    function handleMe() {
        apiSpringAad.me()
            .then(response => response.data)
            .then(data => setDataMe(data))
            .catch(error => console.error(error));
    }

    function handlePrincipal() {
        apiSpringAad.getPrincipal()
            .then(response => response.data)
            .then(data => setDataPrincipal(data))
            .catch(error => console.error(error));
    }

    function handleProfilePhoto() {
        apiSpringAad.getProfilePhoto()
            .then(response => response.data)
            .then(data => setDataProfilePhoto(data))
            .catch(error => console.error(error));
    }

    function handlePhoto() {
        apiSpringAad.getImageAsByteArray({format: "blob"})
            .then((response: AxiosResponse) => {
                const blob = new Blob([response.data]);
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = () => {
                    const base64data = reader.result;
                    setDataPhoto(base64data as string);
                };
            });
    }

    function handleMemberOf() {
        apiSpringAad.getMemberOf()
            .then(response => response.data)
            .then(data => setDataMemberOf(data))
            .catch(error => console.error(error));
    }

    return (
        <Container sx={{mt: 3}}>
            <h5 className="profileContent">Graph Profile</h5>
            <Stack direction='row' spacing={2}>
                <Button color="primary" variant="contained" sx={{mt: 3}} onClick={() => handleMe()}>me</Button>
                <Button color="primary" variant="contained" sx={{mt: 3}}
                        onClick={() => handlePrincipal()}>principal</Button>
                <Button color="primary" variant="contained" sx={{mt: 3}}
                        onClick={() => handleProfilePhoto()}>ProfilePhoto</Button>
                <Button color="primary" variant="contained" sx={{mt: 3}} onClick={() => handlePhoto()}>Photo</Button>
                <Button color="primary" variant="contained" sx={{mt: 3}}
                        onClick={() => handleMemberOf()}>MemberOf</Button>
            </Stack>
            <hr/>
            <Typography><b>Me</b></Typography>
            {JSON.stringify(dataMe)}
            <hr/>
            <Typography><b>Principal</b></Typography>
            {JSON.stringify(dataPrincipal)}
            <hr/>
            <Typography><b>ProfilePhoto</b></Typography>
            {JSON.stringify(dataProfilePhoto)}
            <hr/>
            {dataPhoto
                ? <UserAvatar name="Hello World" imageSrc={dataPhoto}/>
                : <>no data</>}
            <hr/>
            <Typography><b>MemberOf</b></Typography>
            {JSON.stringify(dataMemberOf)}
        </Container>
    );
};
