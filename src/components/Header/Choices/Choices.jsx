import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Choices.module.css';
import { fetchHolidays } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';
import { fetchImage } from '../../../store/imageSlice';
import { NavLink, useParams} from "react-router-dom";

const Choices = () => {
    const [isOpenChoisces, setIsOpenChoisces] = useState(false);
    const { holidays, loading } = useSelector(state => state.holidays);
    const dispatch = useDispatch();
    const {holiday} = useParams(); 

    const toggleChoises = () => {
        if(loading !== 'success') {
            return;
        }
        setIsOpenChoisces(!isOpenChoisces)
    };

    useEffect(() => {
        dispatch(fetchHolidays());
        if (holiday) {
            dispatch(fetchText(holiday));
            dispatch(fetchImage(holiday))
        }
}, [dispatch, holiday])

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
                            toggleChoises();
                        }}
                        >
                        <NavLink 
                            to={`card/${item[0]}`}
                            className={({isActive}) => (isActive ? style.linkActive : '')}
                            >{item[1]}
                        </NavLink>
                    </li>
                ))}
            </ul>
        )
        }
    </div>
    )
}

export default Choices;