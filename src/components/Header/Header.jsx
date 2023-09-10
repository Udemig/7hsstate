import './Header.css'

import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"
import HeaderRight from "../HeaderRight/HeaderRight"
const Header=({headerColor,userName})=>{
    return(
        <header style={{backgroundColor:headerColor}}>
        <Logo />
        <Navbar />
        <HeaderRight userName={userName} />
      </header>

    )
}

export default Header