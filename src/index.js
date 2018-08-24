import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

console.log(process.env);

const API_KEY = process.env.YT_API_KEY;

// Create a new component that produces HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: 'arsenal' }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

// Attach component's HTML to the DOM
ReactDom.render(<App />, document.querySelector('.container'));
