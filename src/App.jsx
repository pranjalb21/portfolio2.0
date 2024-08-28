import { Outlet } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import SocialMedia from "./components/socialMedia/SocialMedia";

function App() {
    return (
        <div className="bg-gradient-to-br from-sky-800 to-sky-950 w-full h-screen box-border overflow-hidden">
            <Header />
            <Body />
            <SocialMedia />
            <Outlet />
        </div>
    );
}

export default App;
