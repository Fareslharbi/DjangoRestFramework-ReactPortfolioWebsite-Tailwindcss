import {React} from 'react'
import './nav.css'
const Nav = ({ homeRef, addRef, updateRef, deleteRef}) => {



	const executeScroll = ref => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}
  return (
		<>
			<div className='container'>
				<ul className=''>
					<li className='sections main' onClick={() => executeScroll(homeRef)}>Projects Panel</li>
					<li className='sections' onClick={() => executeScroll(addRef)}>Add</li>
					<li className='sections' onClick={() => executeScroll(updateRef)}>Update</li>
					<li className='sections' onClick={() => executeScroll(deleteRef)}>Delete</li>					
				</ul>
			</div>
		</>
  )
}

export default Nav