import React, { Component } from 'react';
import axios from 'axios';
import MemeBridge from './MemeBridge.js';
import  './App.css'; 






class App extends Component {
  constructor() {
    super();
    //make an emptry array for state
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
    // perform ajax request after component has finished rendering
    // axios({
    //   url: 'http://api.giphy.com/v1/gifs/trending',
    //   method: 'GET',
    //   dataResponse: 'JSON',
    //   params: {
    //     // maybe apikey if needed
    //     q: 'meme',
    //     api_key: 'XI2UVtaoFcAmwfGg9S1bcArrtsCLVxPc',
    //     fmt: 'JSON',
    //   }
    // }).then((response) => {
    //   //store the date pulled from the ajax call into the empty array, and only parsing to the stuff We want
    //   response = response.data.data.memes;
    //   // const outputData = response;
    //   // const outputDataLength = outputData.length;
    //   console.log(response);
    //   // console.log(outputDataLength);
    //   this.setState({
    //     // change meme to memeOG
    //     meme: response,
    //     isLoading: false,
    //     // outputData: outputData,
    //     // outputDataLength: outputData.length,

    //   }  
    //   )
    //   // this.randomimzer(response);
    // })


    axios.get("http://api.giphy.com/v1/gifs/trending?api_key=XI2UVtaoFcAmwfGg9S1bcArrtsCLVxPc&offset=0")
     .then((response) => {
             //store the date pulled from the ajax call into the empty array, and only parsing to the stuff We want
            //  response = response.data.images;
            //  const outputData = response;
             const outputDataLength = response.data.data.length;
             const memes = response.data.data;
             console.log(response);
             console.log(outputDataLength);
             console.log(memes)

             this.setState({
             outputDataLength,
             memes,


             })
          
           })
          }

  randomimzer = (response) => {
    console.log('Randomizer activate!' , this.state.memes) 
    const allMemes = [...this.state.memes];
    
    for (let i = allMemes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allMemes[i], allMemes[j]] = [allMemes[j], allMemes[i]];
    }
    console.log(allMemes);

    const memeSlice = allMemes.slice(0,6)
    console.log(memeSlice);

    this.setState({
      memetoAppend: memeSlice
    })
  }

  // memeGenerator = () => {

  //   console.log('Randomizer activate!' , this.state.memes) 
  //   const allMemes = [...this.state.memes];
    
  //   for (let i = allMemes.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [allMemes[i], allMemes[j]] = [allMemes[j], allMemes[i]];
  //   }
  //   console.log(allMemes);

  //   const memeSlice = allMemes.slice(0,6)
  //   console.log(memeSlice);

  //   this.setState({
  //     memetoAppend: memeSlice
  //   }
  //   )}
  

  handleClick = () => {
console.log('clicked!')
let meme = this.state.memes

    this.randomimzer(meme);
  }
  
  render() {
     
        
    return (
      <div className="App" >
        <h1> Trending Gifs </h1> 
        <h2>Any way you say it, they are awesome!</h2>

        
               <button className="button" onClick={this.handleClick} >
                Let's Make Some Memes!
              </button>
        <div className="memeGallery">
              { this.state.memetoAppend.map((template) => {
        return <MemeBridge title={template.images.name} imgUrl={template.images.original.url} />
      })
    }  
       </div>       
      </div>
    )
  }
}


  





export default App;
