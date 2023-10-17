import { useState } from "react"
import { categories } from "../Category"
import styles from "./Form.module.css"

function Form() {

    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [videos, setVideos] = useState([])
    const [erros, setErros] = useState('')

    function valideUrl(url){
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(regex.test(url) || url.length < 43){
            setErros('Erro: URL inválida!')
            return false
        }else{
            return url.substring(32, 43) //id do video
        }
    }

    function onSave(event) {
        event.preventDefault()
        console.log(url, category)

        //guardar a url
        const urlVideo = valideUrl(url)
        if(urlVideo && category){
            //guardar url e category
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            console.log(videos)
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            setUrl('')
            setCategory('ERRO: URL inválida!')
        } else {
            setErros()
        }

        if(!category || category === '-'){
            setErros('Erro: Escolha uma categoria')
            return
        }else{
            setErros('')
        }

        
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label htmlFor="">URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={event => setUrl(event.target.value)}
                        maxLength="43"
                        minLength="43"
                    />
                </div>
                <div>
                    <label htmlFor="">Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={event => setCategory(event.target.value)}

                    >
                        <option value="-">Selecione uma categoria</option>
                        {categories.map((item) => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {erros}
                </div>
            </form>
        </section>
    )
}

export default Form
