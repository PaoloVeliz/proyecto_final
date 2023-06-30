import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://35.174.170.145:3307/Data')
            .then((resp) => resp.json())
            .then((apiData) => {
              setData(apiData);
              // console.log(apiData);
            });
      fetch('http://35.174.170.145:3311/data')
            .then((resp) => resp.json())
            .then((apiData) => {
              setData1(apiData);
              // console.log(apiData);
      });
    }, 5000);
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Data insertada en las bases de datos
        </p>
        <div style={tablesection}>
          <div>
            <h2>Data de la temperatura</h2>
          <table>
          <tr style={style}>
            <th>Año</th>
            <th>numero de pacientes</th>
          </tr>
          {data.map((item) => {
                return (
                  <tr key={item.id} style={tablestyle}>
                    <td>{item.fecha}</td>
                    <td>{item.num_pacientes}</td>
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
          {data1.map((item) => {
                return (
                  <tr key={item[0]} style={tablestyle}>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
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
