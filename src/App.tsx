import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Partners from "./components/Partners/Partners";
import Main from "./components/Main/Main";
import Articles from "./components/Articles/Articles";
import DataGsk from "./components/DataGSK/DataGSK";
import InfoGSK from "./components/InfoGSK/InfoGSK";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <DataGsk/>
            <InfoGSK/>
            <Articles/>
            <Partners/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
