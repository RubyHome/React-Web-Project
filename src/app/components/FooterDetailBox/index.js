/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';

class FooterDetailBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  gotoHome(e) {
    console.log("Dom: ", e.target);
    console.log("GoHome: ", e.target.attributes.getNamedItem('value').value);
    // window.location = this.props.sUrl;
  }

  setActive(el) {
    var allSiblings = el.target.parentNode.parentNode.childNodes;
    var count = 0
    while ( count < allSiblings.length) {
      if (allSiblings[count].getAttribute("class") == 'active') {
        allSiblings[count].setAttribute("class", "");
      } 
      count ++;
    }

    el.target.parentNode.setAttribute("class", "active");
  }
  
  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">{this.props.title}</span>
          <span className="pull-right"><label className="remove_icon1 padding_inner_box" onClick={this.gotoHome.bind(this)} value={this.props.sUrl}></label></span>
          <hr />
        </div>

        <div className="form-horizontal content_text">
          <span>{this.props.content}</span>
        </div>
        <div className="footer_text payment_page">
            <div className="pull-right">
              <a href="#" className="btn">Close</a> 
            </div>
        </div>
      </div>
    );
  }

}

FooterDetailBox.propTypes = {
  title       : React.PropTypes.string.isRequired,
  content     : React.PropTypes.string,
  sUrl        : React.PropTypes.string
}

export default FooterDetailBox;
