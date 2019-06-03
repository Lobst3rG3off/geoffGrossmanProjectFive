import React, { Component } from 'react';
import axios from 'axios';
import MemeBridge from './MemeBridge.js';
import  './App.css'; 






class App extends Component {
  constructor() {
    super();
    //make an empty array for state
    this.state = {
      memes: [],
      isLoading: true,
      outputData: 0,
      outputDataLength: 0,
      memetoAppend: [],
      isClicked: false,

    }
  }

  componentDidMount() {

    axios({
      url: 'http://api.giphy.com/v1/gifs/trending?api_key=XI2UVtaoFcAmwfGg9S1bcArrtsCLVxPc&offset=0',
      method: 'GET',
      headers: {
        'X-Content-Type-Options': 'nosniff'
      }
    }).then((response) => {
      const outputDataLength = response.data.data.length;
      const memes = response.data.data;
      this.setState({
        outputDataLength,
        memes,
      })
    })

    // axios.get("http://api.giphy.com/v1/gifs/trending?api_key=XI2UVtaoFcAmwfGg9S1bcArrtsCLVxPc&offset=0")
    //  .then((response) => {
    //          const outputDataLength = response.data.data.length;
    //          const memes = response.data.data;
    //          this.setState({
    //          outputDataLength,
    //          memes,
    //          })      
    //        })
          }

  randomimzer = (response) => {
    const allMemes = [...this.state.memes];
    
    for (let i = allMemes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allMemes[i], allMemes[j]] = [allMemes[j], allMemes[i]];
    }

    const memeSlice = allMemes.slice(0,6)
    this.setState({
      memetoAppend: memeSlice
    })
    

  }

// submit button
  handleClick = () => {
let meme = this.state.memes

    this.randomimzer(meme);

    
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });
  }
// back to top button
  handledClick = () => {
    document.getElementById("heroImage").scrollIntoView({behavior:"smooth"});
  }


  
  render() {
     
        
    return (
      <div className="App" >
        <div className="heroImage" id="heroImage">
          <h1> Trending Gifs </h1> 
          <h2>Anyway you say it, they are awesome!</h2>
          <h2>See the most trending GIFs</h2>
        
        
               <button className="button" onClick={this.handleClick} >
                Lets See!
              </button>
      </div>

            <div className="gallery" id="gallery" >
              <div className="wrapper">
                { this.state.memetoAppend.map((template, i) => {
                    return <MemeBridge key={i} title={template.title} imgUrl={template.images.original.url} />
                  })
                }  
                 <button className="button" onClick={this.handledClick}>Back to Top</button>
                </div>
               
            </div>   
      </div>
    )
  }
}


  





export default App;
