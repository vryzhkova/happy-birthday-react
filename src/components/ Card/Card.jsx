import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation';
import ImageCard from './ImageCard/ImageCard';
import CardBG from '../../img/card-bg.jpg';



const Card = () => (
    <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <ImageCard img={CardBG}/>
            <Felicitation />
          </div>
        </div>
      </div>
);

export default Card;