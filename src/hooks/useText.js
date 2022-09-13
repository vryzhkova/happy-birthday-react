import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

export const useText = holiday => {
    const [text, setText] = useState('Выберите повод для поздравления');

        useEffect(() => {
        if (!holiday) return;

        fetch(`${URI_API}text/${holiday}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.status)
            }
            return response.json();
        })
        .then(data => {
            if(data.text) {
                setText(data.text);
            }
        })
        .catch(err => console.error(err));
    }, [holiday]);

    return [text];
};