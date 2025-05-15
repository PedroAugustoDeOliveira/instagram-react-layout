import { IconsNamesNav } from "./Informations";
import IonIcons from "./IonIcons";

export default function NavMain () {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" alt="" />
                </div>

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" alt="" />
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icones">
                    {IconsNamesNav.map(n => (<IonIcons name={n.name} />))}
                </div>

                <div className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </nav>
    )
}