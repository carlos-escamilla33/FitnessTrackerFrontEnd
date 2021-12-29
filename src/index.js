import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext';
import { MuiThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import App from "./App.js"
// font-family: 'Alfa Slab One', cursive;
const theme = createTheme({
    palette: {
        background: {
            // default: "#F3F3F3"
            default: "black"
        },
    },
    typography: {
        fontFamily: [
            'Work Sans',
            "sans-serif"
        ].join(",")
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <UserProvider>
            <CssBaseline />
            <App />
        </UserProvider>
    </MuiThemeProvider>,
    document.getElementById('app'),
);