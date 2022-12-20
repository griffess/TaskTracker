//rafc - for boiler plate for arrow function component
import PropTypes from 'prop-types';
import Button from './Button'
const Header = ({ title, onAdd }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title:'Task Tracker',
}

Header.prototype ={
    title: PropTypes.string.isRequired,
}
export default Header
