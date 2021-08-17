import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
function Contact() {
    const history = useHistory();
    const goToHome = () => {
        // Logic of redirect to home
        history.push("/");
    }
    return <div>
        Contact works
        <button onClick={goToHome}>Go to Home</button>
        <Router>
            <Switch>
                <Route path="/Contact/jorav">
                    <div>Child ROuting</div>
                </Route>
            </Switch>
        </Router>
    </div>
}
export default Contact;