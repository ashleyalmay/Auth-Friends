import React from "react";
import  {axiosWithAuth}  from "../Utils/axiosWithAuth";
import AddFriend from "./AddFriend";

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res.data, "get response");
        this.setState({
          friends: res.data
        });
      });
  };

  render() {
    return (
      <div className="friendsCont">
        <AddFriend state={this.state} getData={this.getData} />
        {this.state.friends.map(item => (
          <div className="friendsDiv" key={item.id}>
            <h2>{item.name} </h2>
            <h3>Age: {item.age}</h3>
            <h3>Email: {item.email}</h3>
          </div>
        ))}
       
        
      </div>
    );
  }
}

export default Friends;