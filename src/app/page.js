import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.main}>
      <Nav />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}
