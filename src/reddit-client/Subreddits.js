import React from 'react';
import GenericList from './GenericList.js';

const url="http://www.reddit.com/reddits.json"

class SubReddits extends GenericList {

  constructor(props) {
    super(props);
    this.subreddit=props.subreddit;
    this.callback=props.callback;
  }

  changed = (event) => {
    this.subreddit=event.target.value;
    this.callback(this.subreddit);
  }

  fetchSubreddits = () => {
    this.setState({ list: null });
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ list: res }))
      .catch(e => console.log(e));
  }

  componentDidMount() {
    this.fetchSubreddits()
  }

  render() {
    if (!super.gonnaRenderList()) 
      return super.render();;
    let items = this.state.list.data;
    return (
        <div className="listFilters">
          <br/>
          <label>Choose subreddit: </label>
          <select onChange={this.changed} defaultValue={this.subreddit}>
              {items.children.map(item => (
                  <option value={item.data.url} key={item.data.url}>{item.data.title} ({item.data.url})</option>
              ))}
          </select>
        </div>
    );
  }
}

export default SubReddits;