import React, {Component} from "react";



class EditToDo extends Component {
    state = {
        todoname: this.props.title,
    };

    onChangeHandler = (e) => {

        this.setState({
            todoname: e.target.value
        })
    };
    render() {
        return (
            <div className="container">
                <input value={this.state.todoname } onChange={this.onChangeHandler}

                       className="form-control mt-2"
                       placeholder="add to list" type="text"/>
                <a href="#" className="btn btn-success" onClick={() => {
                    this.props.oncreate(this.state.todoname);
                    this.setState({todoname:""})
                } }>Submit</a>
                <p>
                    {this.state.todoname}
                </p>
            </div>
        )
    }
};

export default EditToDo;