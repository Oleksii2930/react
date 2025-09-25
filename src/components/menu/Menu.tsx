import {Link} from 'react-router-dom'
const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/a'}>a link</Link></li>
                <li><Link to={'/b'}>b link</Link></li>
            </ul>
        </div>
    );
};

export default Menu;