import FirstSection from "../components/pages/main/first/FirstSection";
import SecondSection from "../components/pages/main/second/SecondSection";
import ThirdSection from "../components/pages/main/third/ThirdSection";
import FourthSection from "../components/pages/main/fourth/FourthSection";
import FifthSection from "../components/pages/main/fifth/FifthSection";
import SixthSection from "../components/pages/main/sixth/SixthSection";
import Footer from "../components/Footer/Footer";
import PanelBottom from "../components/PanelBottom/PanelBottom";

export default function Home() {
    return (
            <main>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>
                <SixthSection/>
                <FifthSection/>
                <PanelBottom />
            </main>
    )
}