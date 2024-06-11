import './media.scss'
import './main-title.scss'
import {mainTitle} from "../../app/info/info";

const MainTitle = () => {
    return (
        <div className='main-title'>
            <div className="container">
                <div className="main-title__title">{mainTitle.title}</div>
                <div className="main-title__description">{mainTitle.description}</div>
            </div>
        </div>
    )
}

export default MainTitle