import React, { useState } from 'react';
import { Header, Content } from './component';
import { LanguageContext } from './LanguageContext';
import './App.scss';

const App = () => {

    const [ language, setLanguage ] = useState('German');
    const value = { language, setLanguage };

    return(
        <LanguageContext.Provider value={value}>
            <div className='App'>
                <Header />
                <Content />
            </div>           
        </LanguageContext.Provider>
    )
}

export default App
