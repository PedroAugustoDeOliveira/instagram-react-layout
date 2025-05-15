import Leftcontent from './Leftcontent';
import Sidebar from './Sidebar';
import MobileBackground from './MobileBackground';

export default function Content(){
    return(
        <div className="corpo">
            <Leftcontent />
            <Sidebar />
            <MobileBackground />
        </div>
    )
}