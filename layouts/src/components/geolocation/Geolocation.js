import React from 'react';


class Geolocation extends React.Component{

  constructor(props) { 
    super(props);
   
    this.state = { 
      latitude: null, 
      longitude: null
    };
   
    this.handleSuccess = this.handleSuccess.bind(this);
  }


  componentDidMount() { 
  
    if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    } 
  }

 handleSuccess({ coords: { latitude, longitude } }) { 
    this.setState({ 
      latitude, 
      longitude
    }); 
    console.log('latitude, longitude');
    console.log(latitude, longitude);
  }

  render() { 
    return ( 
      <div>
        <h1>Geolocation:</h1>
        <div>Latitude: {this.state.latitude}</div> 
        <div>Longitude: {this.state.longitude}</div> 
      </div> 
    );
  }

}

export default Geolocation;
