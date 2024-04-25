import './header-buttons.scss'
import './media.scss'
import ButtonRed from "@/shared/button-red/ButtonRed";
import ButtonBrown from "@/shared/button-brown/ButtonBrown";

const HeaderButtons = () => {
    const massageHandler = () => {

    }

    const courseHandler = () => {

    }

    return (
        <div className="header-buttons">
            <ButtonRed name="Запись-массаж" type="submit" onClick={massageHandler} />
            <ButtonBrown name="Запись-курсы" type="submit" onClick={courseHandler} />
        </div>
    )
}

export default HeaderButtons