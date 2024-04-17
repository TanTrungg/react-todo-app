import React from "react";
import AddTodo from "./AddTodo";
import "./todo.scss";
import { toast } from "react-toastify";
import RandomColor from "../../utils/HOC/RandomColor";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "1", title: "Doing homework" },
      { id: "2", title: "Playing game" },
      { id: "3", title: "Watching movie" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });

    toast.success("Thêm rồi nè <3");
  };

  deleteATodo = (todo) => {
    let { listTodos } = this.state;

    listTodos = listTodos.filter((item) => item.id !== todo.id);

    this.setState({
      listTodos: listTodos,
    });

    toast.info("Xóa rồi nè !!!");
  };

  handleEdit = (item) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyTodo = Object.keys(editTodo).length === 0;

    //Save
    if (!isEmptyTodo && editTodo.id === item.id) {
      //console.log("save", item);
      let list = [...listTodos];
      let indexTodo = list.findIndex((todo) => todo.id === item.id);
      list[indexTodo].title = editTodo.title;

      this.setState({
        listTodos: list,
        editTodo: {},
      });

      toast.success("Cập nhật thành công <3");
      return;
    }
    console.log("Edit", item);
    //Edit
    this.setState({
      editTodo: item,
    });
  };

  handleOnChangeEdit = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
    //console.log("Edit", editTodoCopy);
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyTodo = Object.keys(editTodo).length === 0;
    //console.log(isEmptyTodo);
    return (
      <>
        <p>This is simple react CURD</p>
        <div className="container">
          <AddTodo addNewTodo={this.addNewTodo} />

          <div className="content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div key={item.id} className="list-item">
                    {isEmptyTodo || editTodo.id !== item.id ? (
                      <span className="text">
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <span className="inputDiv">
                        {index + 1} -{" "}
                        <input
                          value={editTodo.title}
                          onChange={(event) => this.handleOnChangeEdit(event)}
                        />
                      </span>
                    )}

                    <div className="btn">
                      <button onClick={() => this.handleEdit(item)}>
                        {!isEmptyTodo && editTodo.id === item.id
                          ? "Save"
                          : "Edit"}
                      </button>
                      <button onClick={() => this.deleteATodo(item)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default RandomColor(ListTodo);
