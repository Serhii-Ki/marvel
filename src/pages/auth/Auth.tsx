import styles from "./auth.module.css";
import Slider, { SlideType } from "../../components/slider/Slider.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";

const slides: SlideType[] = [
  {
    title: "Definitely Safe ",
    text: "Lorem ipsum dolor sit amet, sadipscing elitr, sed",
    img: "https://www.planetcompliance.com/wp-content/uploads/2024/04/mobile-security.jpg",
  },
  {
    title: "Definitely Safe ",
    text: "Lorem ipsum dolor sit amet, sadipscing elitr, sed",
    img: "https://static.vecteezy.com/system/resources/previews/004/794/040/original/mobile-banking-security-flat-illustration-high-protection-financial-transactions-cartoon-concept-ewallet-ebanking-app-smartphone-safety-and-data-security-isolated-metaphor-on-white-background-vector.jpg",
  },
  {
    title: "Definitely Safe ",
    text: "Lorem ipsum dolor sit amet, sadipscing elitr, sed",
    img: "https://us.123rf.com/450wm/charactervectorart/charactervectorart2205/charactervectorart220500002/185399818-network-security-concept-of-secure-internet-access-smartphone-privacy-and-vpn-connection-protection.jpg?ver=6",
  },
  {
    title: "Definitely Safe ",
    text: "Lorem ipsum dolor sit amet, sadipscing elitr, sed",
    img: "https://cdn.prod.website-files.com/5fedd96b9348a79491159881/63e424ada0e079062be272c7_mobile_app_security_4.jpg",
  },
];

function Auth() {
  return (
    <div className={styles.authWrapper}>
      <Slider slides={slides} />
      <div className={styles.btnWrapper}>
        <CustomBtn title="REGISTER" />
        <CustomBtn title="LOGIN" mode="main" />
      </div>
    </div>
  );
}

export default Auth;
