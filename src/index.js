import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext';
import { MuiThemeProvider, createTheme } from '@material-ui/core';
import App from "./App.js"

const theme = createTheme({
    palette: {
        background: {
            default: "#F3F3F3"
        },
    },
});

ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <UserProvider>
                <App />
            </UserProvider>
        </MuiThemeProvider>,
    document.getElementById('app'),
);