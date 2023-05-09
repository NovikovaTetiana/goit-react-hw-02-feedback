import PropTypes from 'prop-types';

export const Header = ({title}) =>{
  return(
<h1>{title}</h1>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}