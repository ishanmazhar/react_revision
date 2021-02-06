import React, { Component } from 'react';

//Functional Component
// function Person() {
//     return (
//       <div>
//         <h1>I am a component</h1>
//       </div>
//     );
// }

//Class Component
class Person extends Component {
    render() {
        return (
            <div>
                <h1>I am a component</h1>
            </div>
        );
    }
}
export default Person; 