import styles from "./Footer.module.scss";
import Logo from "../../public/logo.svg";
import Icon1 from "./icons/google.svg";
import Icon2 from "./icons/whatsapp.svg";
import Icon3 from "./icons/telegram.svg";
import Icon4 from "./icons/instagram.svg";



const Footer =  () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.desc}>
                            <h6>Наш адрес:</h6>
                            <p>Туркистанская область, Сарыагашский р-н, поселок Коктерек </p>
                        </div>
                        <div className={styles.desc}>
                            <h6>Телефон:</h6>
                            <p>+7 702 761 41 42</p>
                        </div>
                    </div>
                    <Logo/>
                    <div className={styles.right}>
                        <p>Наши социальные сети</p>
                        <div className={styles.socials}>
                            <Icon1 />
                            <Icon2 />
                            <Icon3 />
                            <Icon4 />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
