import { sugestoes } from "./Informations"

function Suggestion({ img, nome, razao }) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={img} alt={nome} />
                <div className="texto">
                    <p className="nome">{nome}</p>
                    <p className="razao">{razao}</p>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}

export default function Sidebar({ img, id, nome }) {
    return (
        <aside className="sidebar">
            <header className="usuario">
                <img src={img} alt={nome} />
                <div className="texto">
                    <strong>{id}</strong>
                    {nome}
                </div>
            </header>

            <section className="sugestoes">
                <div className="titulo">
                    Sugestôes para você
                    <div>Ver tudo</div>
                </div>

                {
                    sugestoes.map(n => (
                        <Suggestion
                            img={n.img}
                            nome={n.nome}
                            razao={n.razao}
                        />
                    ))
                }
            </section>

            <footer className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
                • Localizações • Contas mais relevantes • Hashtags • Idioma
            </footer>
        </aside>
    )
}