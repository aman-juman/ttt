import styles from "./Product.module.scss";
import img from "./img.jpg";
import Image from "next/image";
import SkeletonProduct from "./SkeletonProduct";
import {priceSet} from "../../../utils/priceSet";
import {shortText} from "../../../utils/shortText";

const Product = ({
                     title = "OKSI",
                     description = "В Санатории имеются 60 номеров категорий «люкс», «суперлюкс», «полулюкс», «стандартный» и «экономкласс».",
                     price = 15000,
                     path = "/",
                     book = ""
                 }) => {


    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.imgWrap}><Image src={img} className={styles.img}/></div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h3 className={styles.description}>{shortText(description, 110)}</h3>
                    </div>
                    <div className={styles.right}>
                        <h2 className={styles.title}>{shortText(title, 35)}</h2>
                        <div className={styles.price}>от {priceSet(price)}</div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn + ` ` + styles.blue}>Подробнее</button>
                    <button className={styles.btn + ` ` + styles.purple}>Забронировать</button>
                </div>
            </div>
        </>
    );
};

export default Product;
