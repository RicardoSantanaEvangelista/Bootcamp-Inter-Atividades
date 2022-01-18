import Item from './components/Item';
import Card from  './components/Card';
 
 const App = () => {
   return(
     <>
        <h1>React Listas</h1>
        <ul>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </ul>
        <Card/>
     </>
     
   );
 }

 export default App;
