import react from 'react';
import reactDOM from 'react-dom';
import season from './season'

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );

//     return (
//         <div>Hi there</div>
//     );
// }

class App extends react.Component{
    constructor(props){
        super(props);

        this.state = {lat: null, errorMessage: ''};
    }
//react says we have to define render!!!
    render(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );

        // return (
        //     <div>
        //         {this.state.lat}
        //         <br />
        //         {this.state.errorMessage}
        //     </div>
        // );
        if (this.state.lat)
            return <div>Latitude: {this.state.lat}</div>;
        if (this.state.errorMessage)
            return <div>Latitude: {this.state.errorMessage}</div>;
        return <div>Loading...</div>;
    }
}

reactDOM.render(<App />, document.querySelector('#root'))