import React, {Component} from 'react';
import Tasks from './Tasks';
import Input from './Input';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        let task = e.target.value;
        let addedArr = [...this.state.tasks, task];
        console.log(task);
        console.log(addedArr);
        this.setState((prevState, props) => {
            return {
                tasks: addedArr
            }
        })
    }

    render() {
        return (
            <div>
                <Input onClick={this.addTask} />
                <Tasks tasks={[this.state.tasks]}/>
            </div>
        )
    }

}

export default Todolist;