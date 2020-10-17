import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
//import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends React.Component {      
    render() {
        return (
            <div className="App">                
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default App;
