import styles from "./Card.module.scss";
import cn from "classnames";


const Card = ({children}) => {
    return (
        <div className={styles.wrap}>
            {children}
        </div>
    );
};

export default Card;
