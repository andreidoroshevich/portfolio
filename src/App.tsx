import React from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Main id={"main"}/>
            <Skills id={"skills"}/>
            <Projects id={"projects"}/>
            <Contacts id={"contacts"}/>
            <Footer id={"links"}/>
        </div>
    );
}

export default App;
