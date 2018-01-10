import React from 'react';

class ReloadButton extends React.Component {
    
    render() {
      return (
        <button onClick={this.props.handleClick}><img src='/img/refresh.png' alt='Reload'/></button>
      );
    }
  }

  export default ReloadButton;