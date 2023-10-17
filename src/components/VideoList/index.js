import Card from "../Card"
import style from "./VideoList.module.css"

function VideoList({ videos, emptyHeading }) {
    const count = videos.length
    let heading = emptyHeading
    if (count > 0) {
        const noum = count > 1 ? 'vídeos' : 'vídeo'
        heading = `${count} ${noum}`
    }

    return (
        <>
            <h2>{heading}</h2>
            <section className={style.videos}>
                {videos.map((video) => (<Card id={video.id} key={video.id} />))}
            </section>
        </>
    )
}

export default VideoList
