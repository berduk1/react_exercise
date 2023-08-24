import React, {Component} from 'react'

function Person({person}, key){
    return(
        <div>
            <h2>
                I am person {person.name}
            </h2>
        </div>
    )
}
export default Person