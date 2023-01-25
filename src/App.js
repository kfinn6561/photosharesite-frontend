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
      selected: []
    }
    this.updateHeader()
  }

  componentDidMount(){
    fetch(apiUrl)
    .then((response) => response.json())
    .then(data => {
      this.state.photoData=data;
    console.log(data)})
  }

  getShowDownload = () => {
    return (this.state.selected.length > 0)
  }

  getShowDelete = () => {
    if (this.state.selected.length == 0){
      return false
    }
    for (const photo of this.state.selected) {
      if (!photo.ismodifyible) {
          return false
      }
    }
    return true
  }

  updateHeader = () => {
    this.setState({
      showDownload: this.getShowDownload(),
      showDelete: this.getShowDelete()
    }
    )
  }

  addPhoto = (photo) => {
    return( () => {
      this.state.selected.push(photo)
      this.updateHeader()
    }
    )
  }

  removePhoto = (photo) => {
    return( () => {
      this.state.selected = this.state.selected.filter(item => item != photo)
      this.updateHeader()
  })
  }

  render(){
    return (
    <div className="App">
      <HeaderBar showDownload={this.state.showDownload} showDelete={this.state.showDelete} />
      <header className="App-header">
        <div className='container'>
        {this.state.photoData.map((photo) =>(
          <PhotoCard
           src={photo.url} 
           ismodifyible={photo.ismodifyible} 
           onSelect = {this.addPhoto(photo)}
           onDeselect = {this.removePhoto(photo)}
           key={photo.url} />
        ))}
        </div>
      </header>
    </div>
  );
        }
}

export default App;
