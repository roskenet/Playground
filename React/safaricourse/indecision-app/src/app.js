console.log('App.js is running!')

const app = {
  title: 'Indecision App',
  subtitle: 'This is my subtitle',
  options: ['A', 'B']
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ?  
      <p>These are your options: {app.options[0]}, {app.options[1]}</p> :
      <p>No options.</p>
      }
  </div>
);

const user = {
  name: 'Felix',
  age: 17,
  location: 'Berlin'
};

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);