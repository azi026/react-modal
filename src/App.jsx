import React,{useState} from 'react';
import './App.scss';
import Modal from './component/Modal';

function App() {
    const [modal,setModal]=useState(false);
    const toggle= () => {
        setModal(!modal)
    };
    return (      
          <div>
           <button 
           onClick={()=>toggle()}> 
           Modal
           </button>
           <Modal  show={modal}/>
        </div>
    );
}

export default App;