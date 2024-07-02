import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#865547',
            dark: '#3E2F2C',
            light: '#AB8D7A',
            contrastText: '#E1CECA',
        },
        secondary: {
            main: '#333300',
            dark: '#4D4D1A',
            light: '#666633',
            contrastText: '#821936',
        },
        three: {
            main: '#6F7A8B',
            dark: '#999999',
            light: '#989DA5',
            contrastText: '#171A1A',
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
        error: {
            main: '#f44336',
        },
        success: {
            main: '#4caf50',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.2rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: 0,
                    minWidth: 'auto',
                    color: 'inherit',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#E1CECA',
                    padding: '16px',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#3E2F2C',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                        color: '#AB8D7A',
                    },
                },
            },
        },
    },
});

export default theme;