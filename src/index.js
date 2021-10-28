import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { CssBaseline, MuiThemeProvider, createTheme } from '@material-ui/core';
import App from "./App.js"
import { typography } from '@mui/system';

const theme = createTheme({
    palette: {
        background: {
            default: "#F3F3F3"
        },
    },
});

ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={theme}>
            <UserProvider>
                <CssBaseline />
                <App />
            </UserProvider>
        </MuiThemeProvider>
    </Router>,
    document.getElementById('app'),
);