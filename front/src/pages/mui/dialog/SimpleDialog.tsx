import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';

interface SimpleDialogProps extends DialogProps {
    title: string,
    description?: string,
}

export const SimpleDialog: React.FC<SimpleDialogProps> = ({ title, description, ...props }) => (
    <Dialog {...props}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <DialogContentText>{description}</DialogContentText>
        </DialogContent>
    </Dialog>
);
