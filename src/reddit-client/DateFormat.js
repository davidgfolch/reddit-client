import React from 'react';

const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    // hour: 'numeric', minute: 'numeric', 
    hour12: false,
    timeZone: 'Europe/Madrid' 
  };

class DateFormat extends React.Component {

    constructor(props) {
        super(props);
        this.dateFormat = new Intl.DateTimeFormat('en-GB', options);
    }

    format(date) {
        return this.dateFormat.format(new Date().valueOf(date));
    }

}

export default DateFormat;