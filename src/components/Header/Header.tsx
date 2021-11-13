import React from 'react';
import c from"./Header.module.css"

const Header = () => {
    return(
        <header className={c.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKa6tSgpCgsLzqzjFHF4FdcnpLZxWQYkLSg&usqp=CAU"
    alt='logo' title="image logo"/>
        </header>
    );
}

export default Header;