import {
    Alert,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    MenuItem,
    Select,
    Snackbar,
    Stack,
    Typography
} from "@mui/material";
import { useState } from "react";
import { useGlobalLoading } from "../../../components/GlobalLoading";
import {AlertColor, AlertPropsVariantOverrides} from "@mui/material/Alert/Alert";
import {OverridableStringUnion} from "@mui/types";


type SnackVariant = OverridableStringUnion<'standard' | 'filled' | 'outlined', AlertPropsVariantOverrides>;
type SnackAnchorVertical = 'top' | 'bottom';
type SnackAnchorHorizontal = 'left' | 'center' | 'right';
export const MuiDialog = () => {

    const { showLoading, hideLoading } = useGlobalLoading();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackVariant, setSnackVariant] = useState<SnackVariant>('standard');
    const [snackSeverity, setSnackSeverity] = useState<AlertColor>('error');
    const [snackAnchorHorizontal, setSnackAnchorHorizontal] = useState<SnackAnchorHorizontal>('left');
    const [snackAnchorVertical, setSnackAnchorVertical] = useState<SnackAnchorVertical>('bottom');
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
                    <Stack direction='row' spacing={3}>
                        <Select value={snackVariant} onChange={(e) => setSnackVariant(e.target.value as SnackVariant)}>
                            <MenuItem value='standard'>standard</MenuItem>
                            <MenuItem value='filled'>filled</MenuItem>
                            <MenuItem value='outlined'>outlined</MenuItem>
                        </Select>
                        <Select value={snackSeverity} onChange={(e) => setSnackSeverity(e.target.value as AlertColor)}>
                            <MenuItem value='error'>error</MenuItem>
                            <MenuItem value='warning'>warning</MenuItem>
                            <MenuItem value='info'>info</MenuItem>
                            <MenuItem value='success'>success</MenuItem>
                        </Select>
                        <Select value={snackAnchorHorizontal} onChange={(e) => setSnackAnchorHorizontal(e.target.value as SnackAnchorHorizontal)}>
                            <MenuItem value='left'>left</MenuItem>
                            <MenuItem value='center'>center</MenuItem>
                            <MenuItem value='right'>right</MenuItem>
                        </Select>
                        <Select value={snackAnchorVertical} onChange={(e) => setSnackAnchorVertical(e.target.value as SnackAnchorVertical)}>
                            <MenuItem value='bottom'>bottom</MenuItem>
                            <MenuItem value='top'>top</MenuItem>
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
                anchorOrigin={{horizontal: snackAnchorHorizontal, vertical: snackAnchorVertical}}
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