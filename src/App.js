import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MainContent from './container/MainContent';
import Footer from './presentational/Footer';

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
