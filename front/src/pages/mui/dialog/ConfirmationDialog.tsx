import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import { Dialog, DialogProps } from '@mui/material';

export interface ConfirmationDialogProps extends Omit<DialogProps,'title'> {
    title: React.ReactNode;
    description: React.ReactNode;
    onCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onConfirm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    title,
    description,
    onCancel,
    onConfirm,
    ...props
}) => (
    <Dialog {...props}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onCancel} color="secondary">
                Cancel
            </Button>
            <Button onClick={onConfirm} color="primary" variant='contained'>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
);

export default ConfirmationDialog;