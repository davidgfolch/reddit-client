import React from 'react';
import PostItem from './PostItem.js';
import ReloadButton from './ReloadButton.js';
import GenericList from './GenericList.js';
import './ListLastPosts.css';

const get_posts = subreddit => 'https://api.reddit.com'+subreddit+'new.json';

class ListLastPosts extends GenericList {

  constructor(props) {
    super(props);
    this.subreddit=props.subreddit;
  }

  list = ({children}) => (
    <div>
      {children.map(item => (
        <PostItem item={item} key={item.data.id.toString()}/>
      ))}
    </div>
  ); 

  fetchPosts = (subreddit) => {
    this.setSubreddit(subreddit);
    this.setState({ list: null });
    fetch(get_posts(this.subreddit))
      .then(res => res.json())
      .then(res => this.setState({ list: res })) 
  }

  componentDidMount() {
    this.fetchPosts(this.subreddit);
  }

  setSubreddit(r) {
    if (r) this.subreddit=r;
  }

  load = (subreddit) => {
    this.setSubreddit(subreddit.target?subreddit.target.value:subreddit);
    this.fetchPosts(this.subreddit);
  }

  render() {
    if (super.gonnaRenderList()) {
      let items = this.state.list.data;
      let url=get_posts(this.subreddit);
      return (
          <div className="listContainer">
              <div className="listFilters">
                <div className="floatRight"><ReloadButton handleClick={this.load}/></div>
                <div className="floatLeft">Last posts in <a href={url} target='subredditJson'>{url}</a>:</div>
              </div>
              <div style={{ clear: 'both' }}/>
            {this.list(items)}
          </div>
      );  
    }
    return super.render();
  }
}

export default ListLastPosts;