import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { CssBaseline, MuiThemeProvider, createTheme } from '@material-ui/core';
import App from "./App.js"
import {
    NavBar,
    Footer
} from "./components";

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
                <NavBar />
                <App />
                <Footer />
            </UserProvider>
        </MuiThemeProvider>
    </Router>,
    document.getElementById('app'),
);