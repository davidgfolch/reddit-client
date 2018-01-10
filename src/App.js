import React from 'react';
import logo from './logo.svg';
import './App.css';
import Subreddits from './reddit-client/Subreddits.js'
import ListLastPosts from './reddit-client/ListLastPosts';

class App extends React.Component {

  static listLastPosts = null;

  constructor(props) {
    super(props)
    this.subreddit='/r/pics/';
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  fetchPosts(subreddit) {
    this.listLastPosts.setState({ subreddit: subreddit});
    this.subreddit=subreddit;
    this.listLastPosts.load(subreddit);
  }
  isReloading() {
    return false; // this.listLastPosts.isReloading;
  }
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <span className="App-title">Welcome to Reddit Client</span><br/>
        <span className="App-subtitle">By David G. Folch</span>
        <hr/>
        <Subreddits subreddit={this.subreddit} callback={this.fetchPosts} ref={(ref) => this.subreddits = ref}/>
        <ListLastPosts subreddit={this.subreddit} ref={(ref) => this.listLastPosts = ref}/>
      </div>
    );
  }
}

export default App;
