import React, { Fragment, Component } from 'react'

class ButtonGeneric extends Component {

    render(){
            const {name} = this.props.CompanyDetails;
        return <button className="btn-companies" alt={name} >{name}
            </button>
        
    }
}
export default ButtonGeneric;