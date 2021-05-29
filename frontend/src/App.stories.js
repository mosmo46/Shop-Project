import  React,{useState} from 'react'; 


import Navbar from './components/Navbar/Navbar'
import Backdrop from './components/Backdrop/Backdrop'
import SideDrawer from './components/SideDrawer/SideDrawer'



import App from './App';


export default {
    title:"App",
    component: App
}
// eslint-disable-next-line react-hooks/rules-of-hooks
// const [sideToggle, setSideToggle] = useState(false);

export const Default= () => <App>
    {/* <Navbar click={()=> setSideToggle(true)}/>
<SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/>
<Backdrop show={sideToggle} click={()=>setSideToggle(false)}/> */}

</App>;