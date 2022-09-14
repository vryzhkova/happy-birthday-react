import { createContext, useState } from "react";
import { URI_API } from "../const/const";
import { useFetch } from "../hooks/useFetch";

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({ children }) => {
    const [holiday, setHoliday] = useState('');
    const [holidays] = useFetch(URI_API);

    const changeHoliday = title => {
        setHoliday(title);
    }

    return (
        <holidaysContext.Provider value={{holidays, holiday, changeHoliday}}>
        {children}
        </holidaysContext.Provider>
    )
}