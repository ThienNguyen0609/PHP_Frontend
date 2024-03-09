import './CardHeader.scss'
import logo from "../../assets/images/nike.png";

const CardHeader = (props) => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <div>
                <div className="title">{props.title}</div>
                {props.hasTotalPrice && <div className='total-price'>{props.totalPrice}</div>}
            </div>
        </div>
    )
}

export default CardHeader