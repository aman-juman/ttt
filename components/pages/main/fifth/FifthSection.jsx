import styles from "./FifthSection.module.scss";
import Card from "../../../card/Card";
import cloudImg from "./cloud.png";
import Image from "next/image";


const Form = () =>{
    return(

        <form className={styles.form}>
            <input placeholder="телефон" type="number"/>
            <input placeholder="Имя" type="text"/>
            <button>ОСТАВИТЬ ЗАЯВКУ</button>
        </form>
    )
}


const FifthSection = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.cloudWrap}><Image className={styles.cloud} src={cloudImg}/></div>
            <div className="container">
                <div className={styles.contentWrap}>
                    <Card>
                        <div className={styles.content}>
                            <h5 className={styles.title}>Заказать бесплатную консультацию</h5>
                            <p className={styles.text}>Оставьте свои контакты и мы свяжемся с Вами</p>
                            <Form />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FifthSection;


























// import Head from 'next/head'
// import FirstSection from "../components/pages/main/first/FirstSection";
// import SecondSection from "../components/pages/main/second/SecondSection";
// import ThirdSection from "../components/pages/main/third/ThirdSection";
// import FourthSection from "../components/pages/main/fourth/FourthSection";
// import FifthSection from "../components/pages/main/fifth/FifthSection";
// import SixthSection from "../components/pages/main/sixth/SixthSection";
// import Footer from "../components/Footer/Footer";
// import PanelBottom from "../components/PanelBottom/PanelBottom";
//
// export default function Home() {
//     return (
//         <div>
//             <Head>
//                 <title>Сарыагаш Санатории</title>
//                 <meta name="description" content="Сарыагаш санатории"/>
//                 <link rel="icon" href="/favicon.ico"/>
//             </Head>
//
//             <main>
//                 <FirstSection/>
//                 <SecondSection/>
//                 <ThirdSection/>
//                 <FourthSection/>
//                 <SixthSection/>
//                 <FifthSection/>
//                 <PanelBottom />
//             </main>
//             <Footer/>
//         </div>
//     )
// }

