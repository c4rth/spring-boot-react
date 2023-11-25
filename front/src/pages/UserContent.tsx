import {Container} from '@mui/material';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {apiSpringAad} from "../openapi";
import {OidcUser} from "../openapi/data-contracts.ts";

export const UserContent = () => {

    const [data, setData] = useState<OidcUser | null>(null);

    useEffect(() => {
        apiSpringAad.getPrincipal()
            .then(response => response.data)
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Container sx={{mt: 3}}>
            <h5 className="profileContent">User content</h5>
            <hr/>
            { data
                ? <>
                    <div><h2>AccountInfo</h2></div>
                    <div>
                        <p><strong>authorityType: </strong> {JSON.stringify(data?.authorities)}</p>
                        <p><strong>idToken: </strong> {data?.idToken?.tokenValue}</p>
                        <p><strong>name: </strong> {data?.name}</p>
                    </div>
                </>
                : <Typography>No user found</Typography>
            }
            <hr/>
        </Container>
    );
};
