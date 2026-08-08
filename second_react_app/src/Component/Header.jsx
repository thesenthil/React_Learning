import React from 'react';
function Header() {
  return (
    // <header>
    //   <h1>My React Website</h1>
    //   <hr />
    // </header>
    <>
    <nav style={{height:'100px',width: '100%', backgroundColor: 'black', color: 'white' }}>
        <ul style={{display: 'flex', justifyContent: 'space-evenly',paddingTop: '50px',
             listStyleType: 'none'}}>
        <li>Home </li>
        <li>About </li>
        <li>Contact </li>
        <li>Customer Support </li>
    </ul>
    </nav>
    </>
  );
}

export default Header;