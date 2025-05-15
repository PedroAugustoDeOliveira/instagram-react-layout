import { iconNames } from './Informations'
import IonIcons from './IonIcons'

export default function MobileBakcground() {

    return (
        <nav className="fundo-mobile">
            {
                iconNames.map(n =>
                (
                    <IonIcons
                        name={n.nome}
                    />
                ))
            }
        </nav>
    )
}