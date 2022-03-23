
import {Home} from './src/screens/Home';
import { StatusBar } from 'react-native';
export default function App() {
  return (

    <>
    <StatusBar barStyle='ligth-content'/>
    <Home />
    </>
  );
}

// Js deve retornar apensas um elemento. Caso tenha mais de um 
// no nivel mais externo, pode-se usar o compontente
// Fragmente ou a teg vazia <>..</>
