import logo from './logo.svg';
import './App.css';import React, { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      result:''
    }
  }
  

  apiFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(json => this.apiResponse(json))
  }

  apiResponse = (result) => {
    setTimeout(() => {
      this.setState({
      result
    })
  }, 5000);
  }

  
  componentDidMount(){
    this.apiFetch();
  }

  sortByIdAesc = () =>{
    this.setState({result:
      this.state.result.sort((a, b) => (a.id - b.id))
  });
  }

  sortByIdDesc = () =>{
    this.setState({result:
      this.state.result.sort((a, b) => (b.id - a.id))
  });
  }

  render() {
    const {result} = this.state;
    return (
      <div className="App">
        
      <header className="App-header">
      <div>API Example</div>
        
        {
          !result && <img src={logo} className="App-logo" alt="logo" />
        }
        {
          result && <img src={logo} className="App-logo-static" alt="logo" />
        }

          <br/>
          <br/>
             <table>
                <thead style={{fontSize:'16px'}}>
                  <tr>
                    <th>Id
                    <button onClick={this.sortByIdAesc}>
          ASC
        </button>
        <button onClick={this.sortByIdDesc}>
          DESC
        </button>
                    </th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Body</th>
                  </tr>
                </thead>
        
        {
          result && result.map((data)=>{
            return(
              <tr key={data.id} style={{fontSize:'12px'}}>
            <td>{data.id}
            
            </td>
            <td>{data.userId}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
              </tr>
            
              
            )
          })
        }
        </table>
      </header>
    </div>
    )
  }
}

