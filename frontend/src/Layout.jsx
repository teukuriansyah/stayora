import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';

function Layout(props) {
    return (
        <div>
            <Navbar />
            <div className="py-6 px-8 bg-gray-50">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;