import React from 'react';
import { LanguageChooser } from '../LanguageChooser';
import './Header.scss';

export const Header = () => {
    
    return(
        <div className="Header">
            <p>Please select your language:</p>
            <LanguageChooser />
                        
        </div>
    )
}
