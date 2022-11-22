import styles from "./PanelBottom.module.scss";
import PhoneIcon from "./icons/phone.svg";
import TelegramIcon from "./icons/telegram.svg";
import WhatsappIcon from "./icons/whatsapp.svg";


const PanelBottom = () => {
    return (
        <div className={styles.show}>
            <div className={styles.wrap}>
                <div className={styles.panel}>
                    <a href="tel:+77027611442"><PhoneIcon/></a>
                    <a href="https://telegram.im/@Aiaman9207"><TelegramIcon/></a>
                    <a href="https://wa.me/77027611442?text=Меня%20интересует%20бронирования%20Санаторий%20в%20Сарыагаше"><WhatsappIcon/></a>
                </div>
            </div>
        </div>
    );
};

export default PanelBottom;
