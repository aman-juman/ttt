import styles from "./FirstSection.module.scss";
import bg1 from "./bg1.jpg";
import Image from "next/image";
import Menu from "../../../menu/Menu";
import Logo from "../logo.svg";
import Logo1 from "../logo1.svg";

const FirstSection = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.bgImage}><Image src={bg1}></Image></div>
            <div className={styles.bgCover}></div>
            <div className="container">
                <Menu/>

                <div className={styles.content}>
                    {/*<Logo />*/}
                    <Logo1 className={styles.logo}/>
                    <h1>Отдых и лечение в
                        Сарыагаче</h1>
                    <p>Туркистанская область, Сарыагашский р-н, поселок Коктерек </p>
                </div>
            </div>

        </div>
    );
};

export default FirstSection;
