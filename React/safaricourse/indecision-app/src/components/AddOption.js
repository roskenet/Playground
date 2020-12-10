import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
    // constructor(props) {
    //   super(props);
    // }
    
    handleOnSubmit = (e) => {
      e.preventDefault();
      // console.log(testing);

      const option = e.target.elements.optionText.value.trim();
      const error = this.props.handleAddOption(option);
      
      this.setState(() => ({ error }));
  
      if(!error) {
        e.target.elements.optionText.value = '';
      }
  
    }
  
    render() {
      return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="optionText"></input>
          <button>Submit</button>
        </form>
        </div>
      );
    }
  }