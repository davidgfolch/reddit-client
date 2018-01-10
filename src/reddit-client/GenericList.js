import React from 'react';

class GenericList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      list: null,
    };
    this.listName=props.listName;
  }

  checkListLoaded() {
    this.whatFails=null;
    if (!this.state.list) this.whatFails="list"
    else if (!this.state.list.data) this.whatFails="data"
    else if (!this.state.list.data.children) this.whatFails="children";
    return (this.whatFails==null) ;
  }

  gonnaRenderList() {
    return this.checkListLoaded();
  }

  render() {
    if (!this.gonnaRenderList()) {
      return <div><p>Loading {this.listName} {this.whatFails}...</p></div>

    }
    return (null);
  }
}

export default GenericList;