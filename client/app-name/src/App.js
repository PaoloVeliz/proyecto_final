import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://global-warming.org/api/temperature-api')
            .then((resp) => resp.json())
            .then((apiData) => {
              setData(apiData['result']);
              // console.log(apiData['result']);
            });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const style = {
    border: '1px solid black',
    
  };

  const tablestyle={
    width: '100%',
    border:'1px solid white',
  };

  const tablesection = {
    display: 'flex',
   
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Data insertada en las bases de datos
        </p>
        <div style={tablesection}>
          <div>
            <h2>Data de la temperatura</h2>
          <table>
          <tr style={style}>
            <th>Año</th>
            <th>Estacion</th>
            <th>Suelo</th>
          </tr>
          {data.map((item) => {
                return (
                  <tr key={item.id} style={tablestyle}>
                    <td>{item.time}</td>
                    <td>{item.station}</td>
                    <td>{item.land}</td>
                  </tr>
                );
          })}  
          </table>
          </div>
          <div style={ { paddingLeft: '300px'}}>
          <h2>Data de las enfermedades</h2>
          <table>
          <tr style={style}>
            <th>Año</th>
            <th>Estacion</th>
            <th>Suelo</th>
          </tr>
          {data.map((item) => {
                return (
                  <tr key={item.id} style={tablestyle}>
                    <td>{item.time}</td>
                    <td>{item.station}</td>
                    <td>{item.land}</td>
                  </tr>
                );
          })}  
          </table>

          </div>

        </div>

        
      </header>

      
    </div>
  );
}

export default App;
