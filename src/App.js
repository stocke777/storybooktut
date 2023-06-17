import logo from './logo.svg';
import './App.css';
import Button from './components/Button.tsx';
import Flexbox from './components/Flexbox.tsx';
function App() {
  const style = {
    backgroundColor: "red",
    width: "20px",
    height: "20px"
  }
  return (
    <div className="App">
      <Button title="Submit" color="blue" bgColor="green" padding="20" rounded={false}/>
      <Flexbox bgColor="blue" justify="center" align="center" gap={5}>
        <div style={style}>1</div>
        <div style={style}>1</div>
        <div style={style}>1</div>
      </Flexbox>
    </div>
  );
}

export default App;
