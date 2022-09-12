import { createContext, useState } from "react";

export const textContext = createContext({});

export const TextContextProvider = ( {children} ) => {
    const [text, setText] = useState(`
      Поздравляю с днем рожденья!
      Пусть будет жизнь полна веселья
      Не будет грусти и хлопот,
      А только счастье круглый год!
      
      Желаю творческих успехов,
      Прекрасных дней, улыбок, смеха.
      Любви, душевного тепла,
      Как сказка, чтобы жизнь была!
   `);
    return (
        <textContext.Provider value={{text, setText}}>
            {children}
        </textContext.Provider>
    )
}