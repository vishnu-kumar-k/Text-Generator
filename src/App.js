
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import copy from 'copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [name, changeName] = useState('');
  const [number, changeNumber] = useState(0);
  const [final, changefinal] = useState('');
  const handle = (event) => {
    event.preventDefault();
    if (name === '' || number === 0)
    {
      alert("Please Provide Input!!");
    
      }
    var s = name;
    for (var i = 0; i <= number; i++)
    {
      s += "  " + name;
    }
    changefinal(s);
  }
  const copying = () => {
    copy(final);
    
  }

  return (<div className='full'>
    <Container><Row>
      <Col md={3} sm={1}></Col>
      <Col md={6}  sm={10}>
        <div className='target'>
          <h1>Text Generator </h1>  <form onSubmit={handle}>Text: {"  "}
      <input type='text' onChange={(event) => changeName(event.target.value)}></input><br /><br />Count:
      <input type='number' onChange={(event) => changeNumber(event.target.value)}></input><br /><br />
          <button onClick={handle} className='btn btn-outline-primary spe'>Generate</button>
          </form><br />
          <textarea value={final} rows="4" cols="50">{final}</textarea><br />
          <button  className='btn btn-outline-danger' onClick={copying}>Copy to clipboard</button>
          </div>

      </Col>
 <Col md={3} sm={1}></Col>      </Row>
  
    </Container>
    
  </div>
  );
}

export default App;
