import "./About.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import laptop from "../../assets/Images/laptop.png";
import code from "../../assets/Images/code-simple.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <img src={laptop} alt="" className="laptop" />
      <img src={code} alt="" className="code" />

      <div>
        <h1 className="heading">{t("ABOUT.heading")}</h1>

        <Tabs></Tabs>
      </div>
    </section>
  );
}
