import React from 'react';
import './App.css';
import Main from "./components/Main/Main";
import {Route, Routes} from 'react-router-dom';
import ContactsList from "./components/Contacts/ContactsList";
import AboutUs from "./components/AboutUs/AboutUs";
import Delivery from "./components/Delivery/Delivery";
import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/*" element={<Main/>}/>
                <Route path="/contactsList" element={<ContactsList/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
            </Routes>
        </div>
    );
}

export default App;
