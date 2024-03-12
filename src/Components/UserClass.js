import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      // count: 0,
      // count2: 1,
      userInfo:{
        name:"dummy",
        location:"default",
      }
    };

    // console.log("child constructor")
   // console.log(this.props.name + "child constructor")
  }


  //it used to make api call
async componentDidMount(){
  // console.log("child did mount");
  //console.log(this.props.name + "child did mount")
  const data = await fetch("https://api.github.com/users/akshaymarch7");
  const json = await data.json();

  this.setState({
    userInfo:json,

  })
  console.log(json);
}


componentDidUpdate(){
  console.log("updated");
}
  render() {
    // const { name, location } = this.props;
    // const { count,count2} = this.state;
    const { name, location,avatar_url} = this.state.userInfo;

    // console.log("child render");
   // console.log(this.props.name + "child render")

  
    return (
      <div className="user-card">
        {/* <h1>count:{count}</h1>
        <h1>count1:{count2}</h1>
        <button
          onClick={() => {
            // never update state variables directly
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 1,
            });
          }}
        >
          inc
        </button> */}
        {/* <h1>count:{count2}</h1> */}
        <img src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @ajay1010</h4>
      </div>
    );
  }
}
export default UserClass;
