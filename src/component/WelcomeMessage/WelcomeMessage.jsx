import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export const WelcomeMessage = () => {
    
    const { language } = useContext(LanguageContext);

    const getMessage = () => {
        switch(language) {
            case 'English':
                return 'Hello world';
            case 'Francais':
                return 'Bonjour le monde';
            case 'German':
                return 'Hallo Welt';
            case 'Spanish':
                return 'Hola mundo';
            case 'Dutch':
                return 'Hallo wereld';
            default:
                return '';
        }
    }

    return(
        <div className='WelcomeMessage'>
            <h2>{getMessage()}</h2>
        </div>
    )
}
