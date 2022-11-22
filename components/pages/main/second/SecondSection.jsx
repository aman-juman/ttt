import styles from "./SecondSection.module.scss";
import Image from "next/image";
import BackgroundImg from "./secondBg.jpg";
import ButtonMore from "../../../Buttons/ButtonMore";

const SecondSection = () => {
    return (
        <div className={styles.wrap}>
            <Image className={styles.backgroundImg} src={BackgroundImg} />
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Санатории Сарыагаша</h2>
                    <div className={styles.subTitleWrap}>
                        <h5 className={styles.subTitle}>Курорт Сарыагаш является одним из самых известных
                            бальнеологических курортов Казахстана. </h5>
                        <div className={styles.subTitleBlueBlock}></div>
                        <div className={styles.subTitlePurpleBlock}></div>
                    </div>
                    <div className={styles.textWrap}>
                        <p className={styles.text}>Кроме санатория 'Сарыагаш' здесь расположены и другие санатории,
                            предлагающие широкий спектр услуг по оздоровлению и отдыху.
                        </p>
                    </div>
                    <div className={styles.btnBlock}>
                        <ButtonMore />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
