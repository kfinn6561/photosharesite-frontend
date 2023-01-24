import React from 'react';
import './App.css';
import './gallery.css';
import PhotoCard from './photocard';
import HeaderBar from './headerbar';

const apiUrl='https://localhost:49153/MediaFile/all?userIP=127.1.1.0'

const testData=[
  {
    url: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    ismodifyible: true
  },
  {
    url: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    ismodifyible: false
  },
  {
    url: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    ismodifyible: true
  }
]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      IsDataFetchComplete: false,
      photoData:testData,
      showDownload: true,
      showDelete: true
    }
  }

  componentDidMount(){
    fetch(apiUrl)
    .then((response) => response.json())
    .then(data => {
      this.state.photoData=data;
    console.log(data)})
  }



  render(){
    return (
    <div className="App">
      <HeaderBar showDownload={this.state.showDownload} showDelete={this.state.showDelete} />
      <header className="App-header">
        <div className='container'>
        {this.state.photoData.map((photo) =>(
          <PhotoCard src={photo.url} ismodifyible={photo.ismodifyible} key={photo.url} />
        ))}
        </div>
      </header>
    </div>
  );
        }
}

export default App;
