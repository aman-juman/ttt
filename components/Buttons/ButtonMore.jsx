import styles from "./Buttons.module.scss";
import Arrow from "./arrow.svg";
import cn from "classnames";



const ButtonMore = ({text = "Подробнее", arrow = true}) => {
    return (
        <div className={cn(styles.btnMore, {[styles.center]: !arrow })}>
            {text}
            {arrow ?  <Arrow /> : null}

        </div>
    );
};

export default ButtonMore;
