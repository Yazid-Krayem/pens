import React, { Component } from 'react';


class App extends Component {
  state={contacts_list:[]}
  async componentDidMount(){
    try{
      const response = await fetch('//localhost:8080/pens/list')
      const data = await response.json()
      this.setState({contacts_list:data})
    }catch(err){
      console.log(err)
    }
  }

  render() {
    const { contacts_list } = this.state

    return (
      <div className="App">
       <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" href="#0">Button Text</a>
{ contacts_list.map( contact => 
  <div key={contact.id}>
    <p>{contact.id} -  {contact.name}</p>
  </div>
)}
      </div>
    );
  }
}

export default App;
