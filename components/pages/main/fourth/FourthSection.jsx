import styles from "./FourthSection.module.scss";
import Card from "../../../card/Card";
import Icon1 from "./icons/icon1.svg";
import Icon2 from "./icons/icon2.svg";
import Icon3 from "./icons/icon3.svg";
import Icon4 from "./icons/icon4.svg";
import Icon5 from "./icons/icon5.svg";
import Icon6 from "./icons/icon6.svg";
import Icon7 from "./icons/icon7.svg";

const data1 = [
    {
        icon: <Icon1/>,
        title: "Бесплатная консультация"
    },
    {
        icon: <Icon2/>,
        title: "Бронирование без наценок и %"
    },
    {
        icon: <Icon3/>,
        title: "Официальное бронирования"
    }
];
const data2 = [
    {
        icon: <Icon4/>,
        title: "Работаем 24/7 без выходных"
    },
    {
        icon: <Icon5/>,
        title: "Подбор санаториев"
    },
    {
        icon: <Icon6/>,
        title: "Бесплатный трансфер"
    },
    {
        icon: <Icon7/>,
        title: "Размещение в номере"
    }
]

const FourthSection = () => {
    const Block1 = () => {
        return <>
            {
                data1.map((item, i) => (
                    <div className={styles.listItem}>
                        {item.icon}
                        <h5 className={styles.listItemTitle}>
                            {item.title}
                        </h5>
                    </div>
                ))
            }
        </>
    };
    const Block2 = () => {
        return <>
            {
                data2.map((item, i) => (
                    <div className={styles.listItem}>
                        {item.icon}
                        <h5 className={styles.listItemTitle}>
                            {item.title}
                        </h5>
                    </div>
                ))
            }
        </>
    };
    return (
        <div className={styles.wrap}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.title}>
                        Почему мы?
                    </div>
                    <Card>
                        <Block1/>
                    </Card>
                    <Card>
                        <Block2 />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;



