import { useContext, useState } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';
import style from './Choices.module.css';

const Choices = () => {
    const [isOpenChoisces, setIsOpenChoisces] = useState(false);
    const {holidays, holiday, changeHoliday} = useContext(holidaysContext);

    const toggleChoises = () => {
        setIsOpenChoisces(!isOpenChoisces)
    };
    
    return (
    <div className={style.wrapper}>
        <button className={style.button} onClick = {toggleChoises}>{holidays[holiday] || 'Выбрать праздник'}</button>
        {isOpenChoisces && (
            <ul className={style.list}>
                  {Object.entries(holidays).map(item => (
                     <li 
                        className={style.item} 
                        key={item[0]}
                        onClick={() => {
                            changeHoliday(item[0]);
                            toggleChoises();
                        }}
                        >
                            {item[1]}
                    </li>
                ))}
            </ul>
        )
        }
    </div>
    )
}

export default Choices;