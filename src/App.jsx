import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="bg-gradient-to-br from-sky-800 to-sky-950 w-full h-screen box-border overflow-hidden">
            <Header />
            <Body />
        </div>
    );
}

export default App;
