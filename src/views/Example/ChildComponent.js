import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleDelete = (job) => {
    console.log("Delete:", job);

    this.props.deleteAJob(job);
  };
  render() {
    console.log("check log", this.props);
    // let name = this.props.name
    // let age = this.props.age

    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {/* {!showJobs && <div><button onClick={() => this.handleShowHide()}>Show</button></div>} */}
        {showJobs ? (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}{" "}
                    <button
                      className="btn"
                      onClick={() => this.handleDelete(item)}
                    >
                      X
                    </button>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        ) : (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) =>{
//     console.log('>>Check props: ', props);
//     let { arrJobs} = props;
//     return(
//         <>

//             <div>
//                 {
//                     arrJobs.map((item, index) =>{
//                         return(
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;
