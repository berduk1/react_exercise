import React, {Component} from 'react'
import Person from './Person'
function NameList(){
    const persons =[
        {id: 1,
        name:'John'},
        {id:2,
        name:'Mark'},
        {id: 3,
        name: 'Luke'}
    ]
    const names = ['Bruce', 'Wayne'];
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    const personList = persons.map(person=> <Person key = {person.id} person={person}/>)
    return <div>{personList} {nameList}</div>


}
export default NameList