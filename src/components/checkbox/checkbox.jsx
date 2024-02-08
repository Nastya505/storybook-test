import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, darkTheme} from '../../components/themeProvider/themeContext.js';
import styles from './checkbox.module.css';

const Checkbox = (props) => {
    const {label,type, ...restProps} = props;
    const theme = useContext(ThemeContext);

    const className = `${styles.checkbox}
    ${theme === darkTheme ? styles.checkbox_theme_dark : ''}
    ${type === 'primary' ? styles.checkbox_type_primary : styles.checkbox_type_secondary} `;
    

  return (
    <label className={className}>
      <input type="checkbox" {...restProps} />{label}
    </label>
  )
}

Checkbox.propTypes = {
    /** Checkbox text */
    label: PropTypes.string,
    /** Checkbox style */
    type: PropTypes.oneOf(['primary', 'secondary']),
    /** Checkbox state */
    checked: PropTypes.bool,
    /** Checkbox event */
    onClick: PropTypes.func
}

Checkbox.defaultProps = {
    label: 'Checkbox text 123',
    type: 'primary',
    checked: true,
    onClick: () => {console.log('click')}
}
export default Checkbox