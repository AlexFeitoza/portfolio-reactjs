import { PropTypes, string } from "prop-types";

//Botao Primario

const ButtonPrimary = ({href, target, label, icon, classes}) => {
    if (href) {
        return (
            <a href={href}
            target={target}
            className={"btn btn-primary " + classes}>
            {label}

            {icon ?
            <span className="material-symbols-rounded" aria-hidden="true"> {icon} </span> : undefined}    
            </a>
        ) 
    } else {
            <button className={"btn btn-primary " + classes}> {label} </button>
    }
  
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes,string,
    classes: PropTypes.string
}

export { ButtonPrimary }
