import React, {Component} from "react";
import TodoElement from "./components/TodoElement";

class App extends Component{
    state = {
        todoList: [
            {id: 1, title: "apprendre javascript"}
        ],
        index: -1,
        editingMode: false,
        todoname: "",
    };
    ondeleteHandler = id => {
        let todoList = [...this.state.todoList];
        let index = todoList.findIndex(todo => todo.id === id);
        if (index >= 0) {
            todoList.splice(index, 1);
            this.setState({
                todoList: todoList,
            });
        }

        /*for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {
                console.log(i);
                todoList.splice(i, 1);
                this.setState({
                   todoList: todoList,
                });
                break;
            }
        }*/
    };
    oneditHandler = todo => {
        let todoList = [...this.state.todoList];
        let index = todoList.findIndex(td => todo.id === td.id);
        console.log(todo);
        this.setState({editingMode:true,todoname: todo.title, index: index});

    };

    onclickHandler = e => {
        if (this.state.editingMode){
            let todoList = [...this.state.todoList];
            todoList[this.state.index].title = this.state.todoname;
            this.setState({
                editingMode: false,
                index: -1,
                todoname: "",
                todoList: todoList,
            })
        } else {
            this.setState({
                todoList: [...this.state.todoList,{title:this.state.todoname,id:this.state.todoList.length+1}],
            });
        }
        this.setState({todoname:""});
    };

    onChangeHandler = (e) => {

        this.setState({
            todoname: e.target.value
        })
    };
    render() {
        return (
            <div className="container">
                <h1>
                   TODO List
                </h1>
                {
                    this.state.todoList.map((todo) => {
                      return <TodoElement key={todo.id}
                              element={todo}
                              ondelete={this.ondeleteHandler}
                              onedit={this.oneditHandler}/>
                      })
                }
                <div className="container">
                    <input value={this.state.todoname} onChange={this.onChangeHandler}

                           className="form-control mt-2"
                           placeholder="add to list" type="text"/>
                    <a href="#" className="btn btn-success" onClick={this.onclickHandler }>Submit</a>
                    <p>
                        {this.state.todoname}
                    </p>
                </div>
            </div>
        )
    }
}

export default App;