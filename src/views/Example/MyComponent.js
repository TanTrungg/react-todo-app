import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "job01",
        title: "Back-end",
        salary: "500",
      },
      {
        id: "job02",
        title: "Front-end",
        salary: "400",
      },
      {
        id: "job03",
        title: "FullStack",
        salary: "1100",
      },
    ],
  };

  addNewJob = (job) => {
    // let current = this.state.arrJobs
    console.log("Job:", job);
    let current = this.state.arrJobs;

    current.push(job);

    this.setState({
      //   arrJobs: [...this.state.arrJobs, job],
      arrJobs: current,
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);

    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    console.log("lần 1");
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
