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
        this.props.stateTransform(event);
    }
    handleSubmit(event) {
        alert(`Отправленное имя: ${this.props.userName} ${this.props.age}, опция: ${this.props.option}`);
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
                        value = {this.props.userName} 
                        onChange = {this.handleChange} 
                    />
                </label>
                <label>
                    Ваш возраст:
                    <input 
                        type = 'number' 
                        name = 'age'
                        value = {this.props.age} 
                        onChange = {this.handleChange} 
                    />
                </label>
                <input type = 'submit' value = 'отправить' />
                <select  value = {this.props.option} onChange = {this.handleChange}>
                    <option name = 'option' value = 'option1'>Опция 1</option>
                    <option name = 'option' value = 'option2'>Опция 2</option>
                    <option name = 'option' value = 'option3'>Опция 3</option>
                </select >
            </form>
        )
    }
}
class Verdict extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Артём',
            age: 20,
            option: 'option2'
        }    
        this.stateTransform = this.stateTransform.bind(this)
    }
    stateTransform(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    render() {
        const userName = this.state.userName; 
        const age = this.state.age 
        const option = this.state.option


        return (     
            <div>
                <p>Выбрана опция</p>
                <MyForm  
                    userName = {userName}
                    age = {age}
                    option = {option}
                    stateTransform = {this.stateTransform}/>
            </div>
        )
    }
}
ReactDOM.render(<Verdict />, document.getElementById("root"));
