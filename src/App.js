import logo from './logo.svg';
import './App.css';

function App() {
  
  let array1 = ["Mobile Operating System","Android","Blackberry","Iphone","Windows Phone"];
  let array2 = ["Mobile Manufacturer","Samsung","HTC","MicroMax","Apple"];
  let arr1 = array1.slice(1);
  let arr2 = array2.slice(1);
  return (
    
    <div className="App">
      {
        <Todo1 head={array1[0]}/>        
      }
      {
        arr1.map((e)=>(
          <Todo2 list={e}/>
        ))
      }
       {
        <Todo1 head={array2[0]}/>        
      }
      {
        arr2.map((e)=>(
          <Todo2 list={e}/>
        ))
      }
      
      </div>
  );
}

function Todo1({head}){
  return (
   <h1> {head}</h1>
  )
}

function Todo2({list}){
  return (
   <li> {list}</li>
  )
}

export default App;
