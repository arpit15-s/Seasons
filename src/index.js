import react from 'react';
import reactDOM from 'react-dom';
import Season from './season';
import Loader from './loader'

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
    // constructor(props){
    //     super(props);

    //     this.state = {lat: null, errorMessage: ''};
    // }
    state = { lat: null, errorMessage: '' };

    // Lifecycle mount function
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    };
//react says we have to define render!!!
    render(){
        // window.navigator.geolocation.getCurrentPosition(
        //     position => {
        //         this.setState({lat: position.coords.latitude});
        //     },
        //     err => {
        //         this.setState({errorMessage: err.message});
        //     }
        // );

        // return (
        //     <div>
        //         {this.state.lat}
        //         <br />
        //         {this.state.errorMessage}
        //     </div>
        // );
        if (this.state.lat)
            return <Season lat={this.state.lat} />;
        if (this.state.errorMessage)
            return <div>Latitude: {this.state.errorMessage}</div>;
        return <Loader message = "Please Accept the Location Request!"/>;
    }
}



reactDOM.render(<App />, document.querySelector('#root'))