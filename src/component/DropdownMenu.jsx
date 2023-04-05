import React, { useState } from 'react';

function DropdownMenu(props) {
	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		setIsOpen(!isOpen);
	}
	const mass = [
		{ id: 1, title: 'menu1', description: 'opt 1' },
		{ id: 2, title: 'menu2', description: 'opt 2' },
		{ id: 3, title: 'menu3', description: 'opt 3' },
	];

	return (
		<>
			{mass.map(item => (
				<div className='dropdown'>
					<button className='dropdown-toggle' onClick={toggle}>
						{item.title}
					</button>

					<div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
						{item.description}
					</div>
				</div>
			))}
		</>
	);
}

export default DropdownMenu;
