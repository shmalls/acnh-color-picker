import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-text">
          Thank you for checking out the tool!
        </div>
      </div>
    );
  }
}

export default Footer;