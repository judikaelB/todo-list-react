import React, {Component} from "react";



class CreateTodo extends Component {
    state = {
        todoname: "",
        editMode: false,
    };
    componentDidMount() {
        console.log('bonjour')
    }
    static getDerivedStateFromProps(nextProps, previousState){
        if(!previousState.hasBeenUpdated && nextProps.editingTodo !== null){
            return {
                todoname: nextProps.editingTodo.title,
                editMode: true
            }
        }
        return {editMode: false};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('le composant a été mise à jour');
    }

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

export default CreateTodo;