// import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
// import React from 'react';
// import { Button } from 'antd';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      
      if (options) {
        this.setState(() => ({ options }));
      }
  
      console.log('fetching data');
    } catch(e) {
      // Do nothing!
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {

      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);

    console.log('saving data');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // });

    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1 ) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  
  }

handleDeleteOption(optionToRemove) {
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => optionToRemove !== option)
  }));

   console.log('hto', optionToRemove);
};

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options options={this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}
                 handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   options: []
// };

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >What should I do?</button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//           >What should I do?</button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
    return (
      <div>
      <button onClick={props.handleDeleteOptions}>Remove all!</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {props.options.map(
          (option) => <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
            />
        )}
      </div>
    );
};

const Option = (props) => {
    return (
      <div>
      <p>{props.optionText}
      <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>Remove</button></p>
      </div>
    );
};


class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }
  
  handleOnSubmit(e) {
    e.preventDefault();

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

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));