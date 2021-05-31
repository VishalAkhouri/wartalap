import React from 'react';
import ceylon from '../../assets/ceylon.svg';

function Header() {
    return (
        <header className="bg-red-100 flex flex-row space-x-4 items-center">
            <img src={ceylon} alt="logo" />
            <div className="p-4 my-8 text-4xl animate-pulse border-solid border-2 border-red-200 border-opacity-100 rounded-lg">Wart-A-Lap</div>
        </header>
    );
}

export default Header;