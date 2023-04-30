import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NaviBar';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/Dashboard' activeStyle>
			Dashboard
		</NavLink>
		<NavLink to='/Calendar' activeStyle>
			Calendar
		</NavLink>
		<NavLink to='/Statistics' activeStyle>
			Report
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Calendar'>New Event</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
