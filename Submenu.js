import sublinks from './data'
const Submenu = ({center, page}) => {

	const current = sublinks.find(link => link.page === page);



	return (
		<div className="bg-light text-center" style={{width: `${current.links.length === 2 ? '25%' : '35%'}`, marginLeft : `${center - 260}px`}}>
			<h2>{page}</h2>
			{
				current.links.map((link, index) => {
					const {label, icon} = link;

					return <div key={index}><span>
						<p>{icon}{label}</p>
						</span></div>
				})
			}
		</div>
		
	)
}
export default Submenu;