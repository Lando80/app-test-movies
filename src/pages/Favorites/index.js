import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Favorites.module.css"
import VideoList from "../../components/VideoList"
import { useFavoriteContext } from "../../contexts/Favorites"

function Favorites() {

    const { favorite } = useFavoriteContext()

    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    { <VideoList 
                        videos={favorite}
                        emptyHeading="Sem vídeos favoritos"
                    /> }
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Favorites
