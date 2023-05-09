import PropTypes from 'prop-types';

function Section ({title, children}){
  return(
<h2>{title}</h2>
// {children}
  ) 
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}

export default Section