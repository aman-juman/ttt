import styles from "./SixthSection.module.scss";
import cn from "classnames";
import ButtonMore from "../../../Buttons/ButtonMore";
import Image from "next/image";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

const data = [
    {
        title: "Tashkent city",
        description: "Музей восковых фигур, диодное пшеничное поле, стальные дельфины, прорывающиеся сквозь асфальт, огромный фонтан, мечеть «Орифжанбой» и многое другое в парке Tashkent City.",
        img: img1
    },
    {
        title: "Magic City",
        description: "Magic City — проект, не имеющий аналогов в Центральной Азии в центре Ташкента. Самая большая территория волшебства и развлечений для всей семьи, где точно не будет скучно ни взрослым, ни детям.\n",
        img: img2
    }
]

const Content = ({props, index}) =>{
    const {title, description, img} = props;
    return(
        <div className={cn(styles.content, {[styles.reverse] : index%2})}>
            {
                index%2
                    ? <>
                        <div className={styles.desc}>
                            <span>Открой новый </span>
                            <h5>{title}</h5>
                            <p>{description}</p>
                        </div>
                        <Image className={styles.img} src={img} />
                    </>
                    : <>
                        <Image className={styles.img} src={img} />
                        <div className={styles.desc}>
                            <span>Открой новый </span>
                            <h5>{title}</h5>
                            <p>{description}</p>
                        </div>
                    </>
            }
        </div>
    )
}


const SixthSection = () => {
    return (
        <div className={styles.wrap}>
            <div className="container">
                <div className={styles.contentWrap}>
                    <div className={styles.right}><ButtonMore arrow={false} text="Туры"/></div>
                    {data.map((item, i) => <Content key={i} props={item} index={i} />)}
                </div>
            </div>
        </div>
    );
};

export default SixthSection;