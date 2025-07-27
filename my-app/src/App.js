// import logo from './logo.svg';
import './App.css';

import React from 'react';

function AppName(){
  const name = "Artem"
  const imgUrl = "https://fruit-boutique.com.ua/content/images/17/627x323l80bl0/banan-32719932455155.jpg";
  const imgAlt = "Bananas";

  const favorSite = {
    name: "Google",
    url: "https://www.google.com/"
  }

  const num1 = 10;
  const num2 = 5;
  const sum = num1 + num2;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="AppName">
        <h1>Мене звати {name}</h1>
        <p>Ласкаво просимо до нашого сайту!</p>
        <img src={imgUrl} alt={imgAlt} />

        <a href={favorSite.url}>
          {favorSite.name}
        </a>

        <p>Сума: {sum}</p>

        <ul>
        {colors.map((color) => (
          <li>{color}</li>
        ))}
      </ul>
    </div>
    
  )
}

export default AppName;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
