import {useState} from 'react';
import sublinks from './data';
import Submenu from './Submenu';
const App = () => {
	const [openSubmenu, setOpenSubmenu] = useState(false);
	const [submenuCenter, setSubmenuCenter] = useState('');
	const [activePage, setActivepage] = useState('');

	const showSubmenu = (e) => {
		setOpenSubmenu(true);
		const page = e.target.textContent;
		setActivepage(page);
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		setSubmenuCenter(center);
		
	}

	return (
		<div className="container">
			<div className="row d-flex justify-content-between">
				<h1>Stripe</h1>
				<ul className="d-flex">
					{sublinks.map((link, index) => {
						return <li key={index} className="mr-2"><a href={`/${link.page}`} className="btn btn-primary" onMouseOver={showSubmenu}>{link.page}</a></li>
					})}
				</ul>
				<button className="btn btn-dark btn-sm">Sign In</button>
			</div>
			{openSubmenu && <Submenu center={submenuCenter} page={activePage} />}
			<div style={{height: '500px'}}  onMouseOver={() => setOpenSubmenu(false)}></div>
		</div>
	)
}

export default App;