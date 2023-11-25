import { Container } from '@mui/material';

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
export const MainContent = () => {

    return (
        <Container sx={{ mt: 3}}>
                <h5 className="card-title">You are logged.</h5>
        </Container>
    );
};
