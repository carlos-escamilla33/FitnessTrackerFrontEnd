import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext';
import { MuiThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import App from "./App.js"

const theme = createTheme({
    palette: {
        background: {
            default: "#F3F3F3"
        },
    },
    // overrides: {
    //     MuiCssBaseline: {
    //       '@global': {
    //         html: {
    //           WebkitFontSmoothing: 'auto',
    //         },
    //       },
    //     },
    //   },
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