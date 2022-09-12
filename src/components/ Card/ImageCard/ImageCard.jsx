import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const ImageCard = (props) => {
    const img = useContext(imgContext);
    console.log(img);
    
    return (
        <img className={props.img} src={props.img} alt="Фон открытки" width={840} height={520}/>
    )
};

export default ImageCard;