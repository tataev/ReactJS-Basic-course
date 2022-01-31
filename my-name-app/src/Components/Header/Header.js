import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/profile">Профиль</Link>
                </li>
                <li>
                    <Link to="/chats">Чаты</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;