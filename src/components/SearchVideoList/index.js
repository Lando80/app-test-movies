import styles from "./SearchVideoList.module.css"
import VideoList from "../VideoList"
import { useEffect, useState } from "react"
import Loader from "../Loader"

//filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [searchText, setSearchText] = useState("Magrelinho")
    const foundVideos = filterVideos(videos, searchText)

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            {
                loading ? <Loader /> :
                <VideoList
                    videos={foundVideos}
                    emptyHeading={`Sem videos sobre "${searchText}"`}
                />
            }

        </section>
    )
}

export default SearchVideoList