import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormApp from './FormApp';

class App extends React.Component {
  firstName = (firstname) => {
    this.setState({firstname: this.state.firstname })
    console.log(firstname)
  }
  // clear = () => {
  //   this.setState({items: []})
  // }
  // delete = (indexToDelete) => {
  //   console.log('Delete item', indexToDelete)
  //   let currentItems = [...this.state.items]
  //   currentItems.splice(indexToDelete, 1)
  //   this.setState({ items: currentItems })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        React-Form-Project
        </header>
        <FormApp />
      </div>
    )
  }
}

export default App
