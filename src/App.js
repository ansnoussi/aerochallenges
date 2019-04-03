import React from 'react';
import Firebase from 'firebase';
import config from './config';
import NewPlayer from './components/NewPlayer';


class App extends React.Component {

  constructor(props){
    super(props);
    Firebase.initializeApp(config.firebase);
    this.firstTime = true ;
    this.boardIsShown = false ;
    this.lastPLayer = null ;
    this.state = {
      players: []
    }
  }

  //write data to firebase
  writeUserData = () => {
    Firebase.database().ref('/').set(this.state);
    console.log('DATA SAVED');
  }
  

  //retreive data from firebase
  getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }
  
  //get data for the first time
  componentDidMount() {
    this.getUserData();
  }

  
  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData();
      let ref = Firebase.database().ref('/players');
      ref.orderByChild('uid')
      .startAt(Date.now())
      .limitToLast(1)
      .on('child_added', snapshot => {
      this.lastPLayer = snapshot.val();
    });
      if(this.firstTime == true){
        this.firstTime = false ;
      }else{
        console.log("NEW DATA ADDED");
        this.boardIsShown = false ;
        setTimeout(function(){
          this.boardIsShown = true; 
          this.forceUpdate(); 
        }.bind(this), 5000);
      }
    }
  }

  render() {
    const { players } = this.state;
    const listPLayerTable = players.sort((a, b) => {return((a.score - b.score) < 0)})
    .map(player =>
    <tr key={player.uid}>
      <th scope="row">{player.name}</th>
      <th>{player.score}</th>
      <th>
         <button onClick={ () => this.removeData(player) } className="btn btn-link">Delete</button>
      </th>
      <th>
         <button onClick={ () => this.updateData(player) } className="btn btn-link">Edit</button>
      </th>
    </tr>
    );

    const showThings = (this.boardIsShown) ? 

    <div className="container-fluid">
    <div className="row">
      <div className='col-xl-12'>
        <h1 align="center">Airshow ScoreBoard</h1>
      </div>
    </div>
    <div className='row'>
      <table className="table">
      <thead>
        <tr className="table-primary">
          <th scope="col">Team Name</th>
          <th scope="col">Score</th>
          <th scope="col">function 1</th>
          <th scope="col">function 2</th>
        </tr>
      </thead>
      <tbody>
        {listPLayerTable}
      </tbody>
      </table>
    </div>
    <div className='row'>
      <div className='col-xl-12'>
        <h1>Add new player here</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-row">
            <input type='hidden' ref='uid' />
            <div className="form-group col-md-6">
              <label>Name</label>
              <input type="text" ref='name' className="form-control" placeholder="Name" />
            </div>
            <div className="form-group col-md-6">
              <label>Score</label>
              <input type="text" ref='score' className="form-control" placeholder="Score" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>

  :
  <div><NewPlayer player={this.lastPLayer} ></NewPlayer></div>

  ;
    return(
    <div>{showThings}</div>  
    )
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.refs.name.value;
    let score = this.refs.score.value;
    let uid = this.refs.uid.value;
  
    if (uid && name && score){
      const { players } = this.state;
      const devIndex = players.findIndex(data => {
        return data.uid === uid 
      });
      players[devIndex].name = name;
      players[devIndex].score = score;
      this.setState({ players });
    }
    else if (name && score ) {
      const uid = new Date().getTime();
      const { players } = this.state;
      players.push({ uid, name, score })
      this.setState({ players });
    }
  
    this.refs.name.value = '';
    this.refs.score.value = '';
    this.refs.uid.value = '';
  }
  
  removeData = (player) => {
    const { players } = this.state;
    const newState = players.filter(data => {
      return data.uid !== player.uid;
    });
    this.setState({ players: newState });
  }
  
  updateData = (player) => {
    this.refs.uid.value = player.uid;
    this.refs.name.value = player.name;
    this.refs.score.value = player.score;
  }  

}

export default App;