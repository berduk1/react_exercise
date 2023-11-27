import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import ChildComponent from './components/ChildComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'; 
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComponent';
import RegComp from './components/RegComponent';
import ParComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRInput from './components/FRInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import UpdatedComponent from './components/withCounter';

class App extends Component {
  render(){
    return(
    <div className="App">
     <Counter 
         render={(count, incrementCount) =>(
        <ClickCounter count = {count} incrementCount = {incrementCount}/>
     )}/>
     <Counter 
         render={(count, incrementCount) =>(
        <HoverCounter count = {count} incrementCount = {incrementCount}/>
     )}/>
         </div>)

  }
}

export default App;
