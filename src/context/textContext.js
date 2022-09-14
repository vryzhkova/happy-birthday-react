import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { URI_API } from "../const/const";
import { useFetch } from "../hooks/useFetch"

export const textContext = createContext({});

export const TextContextProvider = ( {children} ) => {
    const holiday = useSelector(state => state.holidays.holiday);
    const [{text}] = useFetch(holiday ? `${URI_API}text/${holiday}` : '');

    return (
        <textContext.Provider value={{text}}>
            {children}
        </textContext.Provider>
    )
}
