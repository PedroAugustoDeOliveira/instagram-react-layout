function Story({ nome, src }) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={src} alt={nome} />
            </div>
            <div className="usuario">
                {nome}
            </div>
        </div>
    )

}



export default function Storiess() {
    const names = [
        {
            nome: '9gag',
            src: 'assets/img/9gag.svg'
        },
        {
            nome: 'meowed',
            src: 'assets/img/meowed.svg'
        },
        {
            nome: 'barked',
            src: 'assets/img/barked.svg'
        },
        {
            nome: 'nathanwpylestrangeplanet',
            src: 'assets/img/nathanwpylestrangeplanet.svg'
        },
        {
            nome: 'wawawicomics',
            src: 'assets/img/wawawicomics.svg'
        },
        {
            nome: 'respondeai',
            src: 'assets/img/respondeai.svg'
        },
        {
            nome: 'filomoderna',
            src: 'assets/img/filomoderna.svg'
        },
        {
            nome: 'memeriagourmet',
            src: 'assets/img/memeriagourmet.svg'
        }
    ]

    return(
        <section className="stories">
            {
                names.map((n) => <Story nome ={n.nome} src={n.src} />)
            }
        </section>
    )
}