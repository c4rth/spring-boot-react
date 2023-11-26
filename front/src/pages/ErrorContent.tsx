import { Container, Typography } from '@mui/material';

export const ErrorContent = () => {
    return (
        <Container sx={{ mt: 3}}>
            <Typography variant="h3" marginBottom={5} >An error occurred</Typography>
        </Container>
    );
};
