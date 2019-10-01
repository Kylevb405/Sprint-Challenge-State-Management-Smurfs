import React from 'react'
import axios from 'axios'

export default class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state={ name: "", age: null, height: "" }
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState( {
            [ event.target.name ]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        const newSmurf = {
            name: this.state.name,
            age: Number(this.state.age),
            height: this.state.height,
        }

        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
               console.log(response.data)
            })
            .catch (err => {
                console.log("error in post", err)
            })
            window.location.reload()
    }


    render() {
        return(
            <div>
                <form onSubmit = { this.onSubmit }>

                    <input
                        className = "name"
                        placeholder = "Enter Your Smurf Name"
                        type = "text"
                        value = { this.state.name }
                        name = "name"
                        onChange = { this.changeHandler }
                    />
                    
                    <input
                        className = " age "
                        placeholder = "Enter Your Smurf Age"
                        type = "number"
                        value = { this.state.age }
                        name = "age"
                        onChange = { this.changeHandler }
                    />

                    <input
                        className = "height"
                        placeholder="Enter Your Smurf Height(cm)"
                        type = "text"
                        value = { this.state.height }
                        name = "height"
                        onChange = { this.changeHandler }
                    />

                    
                    
                    <button type = "submit" className = "SubmitButton"> Join! </button>
                </form>
            </div>
        )
    }
}
