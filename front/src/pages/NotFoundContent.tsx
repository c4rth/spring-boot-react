import { Container } from '@mui/material';

export const NotFoundContent = () => {

    return (
        <Container sx={{mt: 3}}>
            <h2>404 Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
        </Container>
    );
};