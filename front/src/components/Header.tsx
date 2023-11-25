import {
    AppBar,
    Box,
    Button,
    Fade,
    IconButton,
    LinearProgress,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Tooltip
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {MenuNavigation} from '../MenuNavigation';
import {useGlobalLoading} from './GlobalLoading';
import {UserAvatar} from "./UserAvatar.tsx";
import Typography from "@mui/material/Typography";
import {apiSpringAad} from "../openapi";
import {AxiosResponse} from "axios";
import {User} from "../openapi/data-contracts.ts";

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const {isLoading} = useGlobalLoading();
    const [dataPhoto, setDataPhoto] = useState<string | null>(null);
    const [dataMe, setDataMe] = useState<User | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (nav: MenuNavigation) => {
        setAnchorEl(null);
        navigate(nav);
    };

    useEffect(() => {
        requestProfile();
    }, []);

    function requestProfile() {
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
        apiSpringAad.me()
            .then(response => response.data)
            .then(data => setDataMe(data))
            .catch(error => console.error(error));
    }

    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton
                        component={RouterLink}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        to={MenuNavigation.HOME}
                        sx={{mr: 2}}>
                        <HomeIcon/>
                    </IconButton>
                    <Stack direction="row">
                        <>
                            <Button component={RouterLink} color="inherit"
                                    to={MenuNavigation.SPRINGBOOT}>SpringBoot</Button>
                            <Button component={RouterLink} color="inherit" to={MenuNavigation.PROFILE}>Profile</Button>
                            <Button component={RouterLink} color="inherit" to={MenuNavigation.USER}>User</Button>
                        </>
                        <div>
                            <Button
                                id="basic-button"
                                color="inherit"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon/>}>
                                Mui Tests
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}>
                                <MenuItem onClick={() => handleClose(MenuNavigation.MUI_TABLE)}>Table</MenuItem>
                                <MenuItem onClick={() => handleClose(MenuNavigation.MUI_MISC)}>Misc</MenuItem>
                                <MenuItem onClick={() => handleClose(MenuNavigation.MUI_DIALOG)}>Dialog</MenuItem>
                                <MenuItem onClick={() => handleClose(MenuNavigation.DUMMY)}>dummy</MenuItem>
                            </Menu>
                        </div>
                    </Stack>
                    <Box sx={{flexGrow: 1}}/>
                    {dataMe
                        ? <Typography mr={2}>{dataMe.displayName}</Typography>
                        : null
                    }
                    <div className="w3">
                        {dataMe
                            ? <Tooltip title={dataMe.displayName || ""}>
                                <UserAvatar name={dataMe.displayName } imageSrc={dataPhoto}/>
                            </Tooltip>
                            : null
                        }
                    </div>
                </Toolbar>
            </AppBar>

            <Box sx={{width: '100%'}} position='absolute'>
                <Fade in={isLoading} style={{transitionDelay: isLoading ? '200ms' : '0ms',}} unmountOnExit>
                    <LinearProgress/>
                </Fade>
            </Box>
        </>
    );
};
