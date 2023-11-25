import { Alert, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, MenuItem, Select, Snackbar, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useGlobalLoading } from "../../../components/GlobalLoading";


export const MuiDialog = () => {

    const { showLoading, hideLoading } = useGlobalLoading();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackVariant, setSnackVariant] = useState<'standard' | 'filled' | 'outlined'>('standard');
    const [snackSeverity, setSnackSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('error');
    const [openDialog, setOpenDialog] = useState(false);

    const handleLoadingStart = () => {
        showLoading();
    };

    const handleLoadingStop = () => {
        hideLoading();
    };

    const handleOpenLoading = () => {
        //
    };

    const handleSnackbarClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    }

    const handleDialogClose = () => {
        setOpenDialog(false);
    }

    function handleSnackVariant(str: string) {
        switch (str) {
            case 'standard': setSnackVariant('standard'); break;
            case 'filled': setSnackVariant('filled'); break;
            default: setSnackVariant('outlined'); break;
        }
    }
    function handleSnackSeverity(str: string) {
        switch (str) {
            case 'error': setSnackSeverity('error'); break;
            case 'warning': setSnackSeverity('warning'); break;
            case 'info': setSnackSeverity('info'); break;
            default: setSnackSeverity('success'); break;
        }
    }

    return (
        <>
            <Container sx={{ mt: 3 }}>
                <Stack direction='column' justifyContent="flex-start" alignItems="flex-start" spacing={3}>
                    <Button variant="contained" color="primary" onClick={handleLoadingStart}>Loading start</Button>
                    <Button variant="contained" color="primary" onClick={handleLoadingStop}>Loading stop</Button>
                    <Divider color='primary' sx={{ width: '100%' }} />
                    <Button
                        variant="contained"
                        onClick={() => setOpenDialog(true)}
                        color="primary">
                        confirmation dialog
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleOpenLoading}
                        color="primary">
                        loading
                    </Button>
                    <Divider color='primary' sx={{ width: '100%' }} />
                    <Stack direction='row' spacing='3'>
                        <Select value={snackVariant} onChange={(e) => handleSnackVariant(e.target.value)}>
                            <MenuItem value='standard'>standard</MenuItem>
                            <MenuItem value='filled'>filled</MenuItem>
                            <MenuItem value='outlined'>outlined</MenuItem>
                        </Select>
                        <Select value={snackSeverity} onChange={(e) => handleSnackSeverity(e.target.value)}>
                            <MenuItem value='error'>error</MenuItem>
                            <MenuItem value='warning'>warning</MenuItem>
                            <MenuItem value='info'>info</MenuItem>
                            <MenuItem value='success'>success</MenuItem>
                        </Select>
                    </Stack>
                    <Button
                        variant="contained"
                        onClick={() => setOpenSnackbar(true)}
                        color="primary">
                        Show Snackbar
                    </Button>
                </Stack>
            </Container>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}>
                <Alert variant={snackVariant} severity={snackSeverity}><Typography>This is a {snackVariant} {snackSeverity} Snackbar</Typography></Alert>
            </Snackbar>
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color='secondary' onClick={handleDialogClose}>Disagree</Button>
                    <Button color='primary' onClick={handleDialogClose} autoFocus>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}