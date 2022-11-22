import styles from "./ThirdSection.module.scss";
import cn from "classnames";
import Image from "next/image";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import ButtonMore from "../../../Buttons/ButtonMore";

const data = [
    {
        title: "Маржан-Су",
        description: "Внутри Санаторий оснащён собственным бюветом, который на прямую подсоединен к источнику, где можно пить минеральную воду в трёх градусах 22С, 38С ,42С. \n" +
            "\n",
        subDescription: "Именно на основе этой скважины и построен уютный и комфортабельный санаторий \"Маржан СУ\"",
        img: img1
    },
    {
        title: "Ая-Жан",
        description: "В санатории работают высококвалифицированные врачи: врач УЗИ, терапевт, кардиолог, гастроэнтеролог, уролог, гинеколог, невропатолог.",
        subDescription: "Комфортабельный номера европейского стандарта оснащены современным оборудованием и порадуют вас уютом и комфортом.",
        img: img2
    },
    {
        title: "Саруар",
        description: "Санаторий «Зангар» — это жемчужина курортной зоны Сарыагаш, расположенная в центре зоны и имеющая огромный спектр оказываемых услуг. Наш санаторий готов помочь каждому желающему.",
        subDescription: "Приятным бонусом являются доступные цены, но при этом высокий сервис, качественное оборудование.\n",
        img: img3
    },
]

const ThirdSection = () => {
    return (
        <>
            {data.map((item, i) =>   <Item key={i} item={item} index={i} />)}
        </>
    );
};

export default ThirdSection;


const Item = (props) =>{
    const {title, description, subDescription, img} = props.item;
    const Button = () =>{
        return <>
            {
                props.index < 2
                ? <hr className={styles.hrBottom}/>
                : <div className={styles.showMore}><ButtonMore text="Смотреть другие" arrow={false}/></div>
            }
        </>
    };

    const ImgBlock = ({index}) =>{

        return(
            <div className={styles.imgBlogWrap}>
                <div className={styles.imgBlock}>
                    <div className={cn(styles.imgBg, {[styles.imgBgReverse]: index === 1})}></div>
                    <div className={styles.img}></div>
                    <Image className={styles.img} src={img}/>
                </div>
            </div>
        )
    };

    const DescBlock = () =>{
        return (
            <div className={styles.descBlock}>
                <div className={styles.titleWrap}>
                    <div className={styles.title}>{title}
                        <div className={styles.subTitle}>санаторий</div>
                    </div>

                </div>

                <p className={styles.description}>
                    {description}
                </p>
                <hr />

                <p className={styles.subDescription}>
                    {subDescription}
                </p>
                <div className={styles.btnBlock}>
                    <ButtonMore />
                </div>
            </div>
        )
    }


    return(
        <div className={styles.wrap}>
            <div className="container">
                <div className={styles.content}>
                    {
                        props.index === 1
                            ? <>
                                <DescBlock />
                                <ImgBlock index={props.index} />

                            </>
                            : <>
                                <ImgBlock index={props.index} />
                                <DescBlock />
                            </>
                    }
                </div>
            </div>
            <Button />
        </div>
    )
}