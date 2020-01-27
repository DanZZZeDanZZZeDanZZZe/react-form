import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Артём',
            age: 20,
            option: 'option2'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    handleSubmit(event) {
        alert(`Отправленное имя: ${this.state.userName} ${this.state.age}, опция: ${this.state.option}`);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}> 
                <label>
                    Имя:
                    <input 
                        type = 'text' 
                        name = 'userName'
                        value = {this.state.userName} 
                        onChange = {this.handleChange} 
                    />
                </label>
                <label>
                    Ваш возраст:
                    <input 
                        type = 'number' 
                        name = 'age'
                        value = {this.state.age} 
                        onChange = {this.handleChange} 
                    />
                </label>
                <input type = 'submit' value = 'отправить' />
                <select  value = {this.state.option} onChange = {this.handleChange}>
                    <option name = 'option' value = 'option1'>Опция 1</option>
                    <option name = 'option' value = 'option2'>Опция 2</option>
                    <option name = 'option' value = 'option3'>Опция 3</option>
                </select >
            </form>
        )
    }
}
ReactDOM.render(<MyForm />, document.getElementById("root"));
