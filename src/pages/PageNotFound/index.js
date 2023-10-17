import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./PageNotFound.module.css"
import erro404 from "./error404.svg"

function PageNotFound(){
    return(
        <section className={styles.container}>
            <Header />
            <h2>Ops! Entrou capim na palheta... deu ruim heim!</h2>
            <img src={erro404} alt="Logo de página não localizada" />
            <Footer />
        </section>

    )
}

export default PageNotFound