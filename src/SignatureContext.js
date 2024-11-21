import React, { createContext, useState } from 'react';

export const SignatureContext = createContext();

export const SignatureProvider = ({ children }) => {
    const [signature, setSignature] = useState('');

    return (
        <SignatureContext.Provider value={{ signature, setSignature }}>
            {children}
        </SignatureContext.Provider>
    );
};

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profileImage, setProfileImage] = useState(null);

    return (
        <ProfileContext.Provider value={{ profileImage, setProfileImage }}>
            {children}
        </ProfileContext.Provider>
    );
};