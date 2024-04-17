import React from "react";
class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangetitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Data is required!!!");
      return;
    }
    console.log("This is submit data: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="title">Title Job</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangetitle(event)}
          />
          <br />

          <label htmlFor="salary">Salary</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />

          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
