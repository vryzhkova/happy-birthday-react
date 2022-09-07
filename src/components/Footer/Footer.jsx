import Container from "../Container/Container";
import style from './Footer.module.css';
import { ReactComponent as VKIcon} from "../../img/vk.svg";
import { ReactComponent as TgIcon} from "../../img/tg.svg";
import { ReactComponent as PintIcon} from "../../img/pinterest.svg";
import { ReactComponent as StIcon} from "../../img/stumbleupon.svg";

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href="https://t.me/Mrshamalloww">Anastasia Ilina</a></p>
                    <p>Сoder:  <a href="href://t.me/">Ryzhkova Viktoryia</a></p>
                    <p>© HBCard, 2022</p>
                </div>

                <ul className={style.social}>
                    <li className={style.item}>
                        <a className={style.link} href="https://vk.com/methed">
                            <VKIcon/>
                        </a>
                    </li>

                    <li className={style.item}>
                        <a className={style.link} href="https://t.me/methed_chat_frontend">
                        <TgIcon/>
                        </a>
                    </li>

                    <li className={style.item}>
                        <a className={style.link} href="https://pinterest.com">
                        <PintIcon/>
                        </a>
                    </li>

                    <li className={style.item}>
                        <a className={style.link} href="https://stumbleupon.com">
                        <StIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;
