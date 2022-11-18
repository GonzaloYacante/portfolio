import { Image } from "antd";
import '../assets/style/components/NavBar.less';

import logo from '../assets/img/code.png';

function NavBar() {
  return (
    <header className='header'>
      <Image preview={false} className='header-logo' alt='Logo de la Web' src={logo} />
    </header>
  )
}

export default NavBar;