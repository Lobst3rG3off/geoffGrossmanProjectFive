import React, { Component } from 'react';
import axios from 'axios';
import MemeBridge from './MemeBridge.js';
import  './App.css'; 






class App extends Component {
  constructor() {
    super();
    //make an emptry array for state
    this.state = {
      meme: [],
      isLoading: true,
      outputData: 0,
      outputDataLength: 0,
      memetoAppend: [],
      isClicked: false,

    }
  }

  componentDidMount() {
    // perform ajax request after component has finished rendering
    axios({
      url: 'https://api.imgflip.com/get_memes',
      method: 'GET',
      dataResponse: 'JSON',
      params: {
        // maybe apikey if needed
        format: 'JSON',
      }
    }).then((response) => {
      //store the date pulled from the ajax call into the empty array, and only parsing to the stuff We want
      response = response.data.data.memes;
      const outputData = response;
      const outputDataLength = outputData.length;
      console.log(response);
      console.log(outputDataLength);
      this.setState({
        // change meme to memeOG
        meme: response,
        isLoading: false,
        outputData: outputData,
        outputDataLength: outputData.length,

      }  
      )
      // this.randomimzer(response);
    })

  }

  randomimzer = (response) => {
    console.log('Randomizer activate!' , this.state.meme) 
    const allMemes = [...this.state.meme];
    
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

    







    // let memeParse = (outputData, outputDataLength) => {
    //         let sortedMemes = [];
    //         let genNumbers = [];
    //         let randNum = undefined;


    // function sortMemes() {

    //     if (this.state.outputDataLength < 6 && this.state.outputDataLength != 0) {

    //         for (let i = 0; i < outputDataLength; i++) {
    //             sortedMemes.push(this.state.outputData.results[i]);
    //         }

    // return this.state.memetoAppend;


            
    //     }  else {
    //         let randNum = random(0, this.state.outputDataLength);
    //         if (genNumbers.includes(randNum)) {
    //             sortMemes();
    //         } else if (sortedMemes.length === 6) {
    //             return this.state.memetoAppend;
                
    //         } else {
    //             genNumbers.push(randNum)
    //             sortedMemes.push(this.state.outputData.results[randNum]);
    //             sortMemes();
    //         }
    //     }
    //   } 
    // }

  }

  // memeGenerator = () => {

  //   console.log('Randomizer activate!' , this.state.meme) 
  //   const allMemes = [...this.state.meme];
    
  //   for (let i = allMemes.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [allMemes[i], allMemes[j]] = [allMemes[j], allMemes[i]];
  //   }
  //   console.log(allMemes);

  //   const memeSlice = allMemes.slice(0,6)
  //   console.log(memeSlice);

  //   this.setState({
  //     memetoAppend: memeSlice
  //   )}
  // }

  handleClick = () => {

let meme = this.state.meme

    this.randomimzer(meme);
  }
  
  render() {
     
        
    return (
      <div className="App" >
        <h1> Dank Memes! </h1>

        
              <button className="button" onClick={this.handleClick} >
                Let's Make Some Memes!
              </button>

              { this.state.memetoAppend.map((template) => {
        return <MemeBridge title={template.name} imgUrl={template.url} />
      })
    }
              
      </div>
    )
  }
}




export default App;
