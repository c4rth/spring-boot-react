import {useState} from 'react';
import {SpringBootData} from '../components/SpringBootData';
import Button from '@mui/material/Button';
import {Container} from '@mui/material';
import {apiSpringAad} from "../openapi";

export const SpringBootContent = () => {
        const [springBootData, setSpringBootData] = useState<string | null>(null);

        function RequestSpringBootData() {
            apiSpringAad.welcome()
                .then((response) => response.data)
                .then((response) => setSpringBootData(response));
        }

        return (
            <Container sx={{mt: 3}}>
                <h5 className="profileContent">Spring Boot Data</h5>
                {springBootData ? (
                    <SpringBootData springBootData={springBootData}/>
                ) : (
                    <Button variant="contained" color="primary" onClick={RequestSpringBootData}>
                        Request Spring Boot Data
                    </Button>
                )}
            </Container>
        );
    }
;
