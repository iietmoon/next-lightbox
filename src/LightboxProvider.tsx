import React, { createContext, useContext, useState } from 'react';
import Lightbox from 'next-lightbox/src/Lightbox'

interface LightboxContextProps {
    open: (src: string, images?: string[]) => void;
    close: () => void;
    currentSrc: string | null;
    currentImages: string[];
}

const LightboxContext = createContext<LightboxContextProps | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentSrc, setCurrentSrc] = useState<string | null>(null);
    const [currentImages, setCurrentImages] = useState<string[]>([]);

    const open = (src: string, images: string[] = []) => {
        setCurrentSrc(src);
        setCurrentImages(images);
    };

    const close = () => {
        setCurrentSrc(null);
    };

    return (
        <LightboxContext.Provider value={{ open, close, currentSrc, currentImages }}>
            {children}
            <Lightbox></Lightbox>
        </LightboxContext.Provider>
    );
};

export const useLightbox = () => {
    const context = useContext(LightboxContext);
    if (!context) {
        throw new Error('useLightbox must be used within a LightboxProvider');
    }
    return context;
};
