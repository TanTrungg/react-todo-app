import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSubmit = () => {
    if (!this.state.title) {
      toast.error("Data title is required!!!");
      return;
    }

    this.props.addNewTodo({
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    });

    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <>
        <div className="add-todo">
          <div className="inputDiv">
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => this.handleChangeTitle(event)}
              placeholder="Input here"
            />
            <button type="button" onClick={() => this.handleSubmit()}>
              Add
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default AddTodo;
