import { createContext, useState } from "react";

export const imgContext = createContext({});

export const ImgContextProvider = ( {children} ) => {
    const [img, setImg] = useState('');

    return (
        <imgContext.Provider value={{img, setImg}}>
            {children}
        </imgContext.Provider>
    )
}