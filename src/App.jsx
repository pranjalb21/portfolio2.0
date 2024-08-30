import { Outlet } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import SocialMedia from "./components/socialMedia/SocialMedia";

function App() {
    return (
        <div className="app  w-full h-screen box-border overflow-y-auto font-handlee font-bold">
            <Header />
            <Body />
            <SocialMedia />
            <Outlet />
        </div>
    );
}

export default App;
