import './components.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Admin from './Admin';
import Manager from './manager';
import Lecturer from './lecture';

function Header()
{
    return (
    <div>
        <header className="Header-header">
            <h1>Hello World</h1>
            <div>
                    <nav>
                        <ul>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/manager">Manager</Link></li>
                            <li><Link to="/lecture">Lecturer</Link></li>
                        </ul>
                    </nav>
                </div>

                <Routes>
                    <Route path="/Admin" element={<Admin />} />
                    <Route path="/manager" element={<Manager />} /> 
                    <Route path="/lecture" element={<Lecturer />} /> 
                </Routes>
            </header>
    </div>
    )
}



export default Header;