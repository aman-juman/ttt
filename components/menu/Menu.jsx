import styles from "./Menu.module.scss";


const Menu = () => {
    return (
        <div className={styles.wrap} >
            <ul className={styles.list}>
                <a href="#"><li className={styles.item}>Контакты</li></a>
                <a href="#"><li className={styles.item}>Новости</li></a>
                <a href="#"><li className={styles.item}>Наши услуги</li></a>
                <a href="#"><li className={styles.item}>Акций</li></a>
                <a href="#"><li className={styles.item}>Лучшие санатории</li></a>
            </ul>


        </div>
    );
};

export default Menu;
