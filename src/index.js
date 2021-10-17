import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import App from "./App.js"

ReactDOM.render(
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>,
    document.getElementById('app'),
);