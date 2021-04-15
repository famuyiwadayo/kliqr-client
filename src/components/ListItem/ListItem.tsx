import { Avatar } from ".."
import './ListItem.scss';
import {ReactComponent as Arrow} from '../../assets/svgs/arrow_forward.svg'

const ListItem = () => {
    return <a href="#" className="kliqr-listItem">
        <Avatar src="https://randomuser.me/api/portraits/men/17.jpg" />
        <div className="kliqr-listItem__info">
            <h4 className="kliqr-listItem__info__title">Jude Agboola</h4>
            <span className="kliqr-listItem__info__description">
                <span>300 Transactions</span>
                <span className="dot"></span>
                <span>Joined 2 months ago</span>
            </span>
        </div>
        <span className="kliqr-listItem__arrow">
            <Arrow />
        </span>
    </a>
}

export default ListItem;