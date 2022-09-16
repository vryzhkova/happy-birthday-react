import { useSelector } from "react-redux";
import CardBG from "../../../img/card-bg.jpg";

const ImageCard = (props) => {
    const {urlImg} = useSelector(state => state.image);

    return (
        <img className={props.img} src={urlImg || CardBG} alt="Фон открытки" width={840} height={520}/>
    )
};

export default ImageCard;