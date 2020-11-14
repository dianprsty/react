import React, { Component } from 'react';
import { RowInput } from "../../component/element"

class addDivision extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            division:'',
         }
    }

    setValueInput = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    saveDivisi = () => {
        const division = this.state
        console.log(division)
    }

    showSecret = () => {
        if (this.state.isLogin) {
            return (
                <div style={{ marginTop: "10px" }}>
                </div>
            )
        }
    }

    render() { 
        return ( 
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "max-content" }}>                    
                    <RowInput
                        label="Division:" 
                        type="text" 
                        name="division" 
                        value={ this.state.division}
                        setValue={ (el) => this.setValueInput(el) } />     


                    <div style={{ marginTop: "10px" }}>
                        <button className="btn btn-primary" onClick={ this.saveDivisi }>Add Divisi</button>
                    </div>

                    

                </div>
            </div>
         );
    }
}
 
export default addDivision;