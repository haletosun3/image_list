import React from 'react';
import SearchInput from './Searchinput';
import axios from 'axios';
import ImageList from './ImageList';
class App extends React.Component 
{   constructor (props){
	super(props);
	 this.state = { images: [] };
    }
	
	 onSearchSubmit = async (entry) =>   
	{
	  const response = await axios.get(`https://pixabay.com/api/?key=26158203-44c16e93c486b10f865b1e282&q=${entry}&image_type=photo`);
      this.setState({ images: response.data.hits });
    }
	render() {
		return( 
			<div className = "ui container" >
			<SearchInput onSearchSubmit = {this.onSearchSubmit}/> 
			<ImageList images={this.state.images} />
			</div>
		)
	}
}


export default App;