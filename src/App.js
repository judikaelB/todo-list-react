import React, {Component} from "react";
import TodoElement from "./components/TodoElement";
import CreateTodo from "./components/CreateTodo"


class App extends Component{
    state = {
        todoList: [
            {id: 1, title: "apprendre javascript"}
        ],
        editingTodo: null,
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
        //let index = todoList.findIndex(td => todo.id === td.id);
        this.setState({editingTodo:todo});

    };

    onclickHandler = todoname => {
        this.setState({
            todoList: [...this.state.todoList,{title:todoname,id:this.state.todoList.length+1}]
        });
        console.log(this.state.todoList);
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
                <CreateTodo oncreate={this.onclickHandler} editingTodo={this.state.editingTodo} />
            </div>
        )
    }
}

export default App;