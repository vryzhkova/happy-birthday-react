import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { holidaysContext } from '../../../context/holidaysContext'
import style from './Choices.module.css';
import { setHoliday } from '../../../store/holidaysSlice'
import { useContext } from 'react';

const Choices = () => {
    const [isOpenChoisces, setIsOpenChoisces] = useState(false);
    const {holiday} = useSelector(state => state.holidays);
    const dispatch = useDispatch();
    const {holidays} = useContext(holidaysContext);

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
                            dispatch(setHoliday(item[0]));
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