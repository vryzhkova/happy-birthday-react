import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Choices.module.css';
import { fetchHolidays, setHoliday } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';

const Choices = () => {
    const [isOpenChoisces, setIsOpenChoisces] = useState(false);
    const { holiday, holidays, loading } = useSelector(state => state.holidays);
    const dispatch = useDispatch();

    

    const toggleChoises = () => {
        if(loading !== 'success') {
            return;
        }
        setIsOpenChoisces(!isOpenChoisces)
    };

    useEffect(() => {
        dispatch(fetchHolidays());
}, [dispatch])

console.log(holidays)

    return (
    <div className={style.wrapper}>
        <button className={style.button} onClick = {toggleChoises}>
            {loading !== 'success' ? 'Загрузка...' : holidays[holiday] || 'Выбрать праздник'}
        </button>
        {isOpenChoisces && (
            <ul className={style.list}>
                  {Object.entries(holidays).map(item => (
                     <li 
                        className={style.item} 
                        key={item[0]}
                        onClick={() => {
                            dispatch(setHoliday(item[0]));
                            dispatch(fetchText(item[0]));
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