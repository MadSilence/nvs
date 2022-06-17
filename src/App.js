import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import ContactForm from "./components/contactComponent/ContactForm";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
