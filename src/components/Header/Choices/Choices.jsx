import { useState } from 'react';
import style from './Choices.module.css';

const holidays = {
    newYear: 'Новый год',
    birthdayWomen: 'День рождения Ж',
    birthdayMen: 'День рождения М',
    womenDay: '8 марта',
    knowledgeDay: 'День знаний',
}

const Choices = () => {
    const [isOpenChoisces, setIsOpenChoisces] = useState(false);
    const [holiday, setHoliday] = useState('Выбрать праздник');

    const toggleChoises = () => {
        setIsOpenChoisces(!isOpenChoisces)
    };

    const changeHoliday = title => {
        setHoliday(title);
        toggleChoises();
    }
    
    return (
    <div className={style.wrapper}>
        <button className={style.button} onClick = {toggleChoises}>{holiday}</button>
        {isOpenChoisces && (
            <ul className={style.list}>
                  {Object.entries(holidays).map(item => (
                     <li 
                        className={style.item} 
                        key={item[0]}
                        onClick={() => {
                            changeHoliday(item[1])
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