/* global $:true */

import React, {
  Component,
  PropTypes
}                                     from 'react';
import {Motion, spring, presets}      from 'react-motion';
import ModalBox                       from '../../components/ModalBox';
import { Link }                       from 'react-router';

class AgreementLeftSideBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState : false,
      title          : '',
      content        : ''
    }
  }

  componentWillMount() {
    this.setState({title : "About"});
    this.setState({content : 
      "Lorem ipsum dolor sit amet, ne pri hinc voluptatibus.\
       Eu eleifend eloquentiam sea. Duis soluta mei cu.\
        Sumo consul definitiones vis at, error soleat"});
  }

  componentWillUnmount() {

  }

  openModal() {
    this.setState({openModalState : true});
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  setActive(el) {
    console.log("INDEX: ", el.target.parentNode.parentNode.childNodes);
    var allSiblings = el.target.parentNode.parentNode.childNodes;
    var count = 0
    while ( count < allSiblings.length) {
      console.log("TET: ", allSiblings[count].getAttribute("class"));
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
        <div className="header_text">
          <span className="padding-left-little">Agreements</span>
          <hr />
          <span className="pull-right padding-right-little"><a href="index">index</a></span>          
        </div>
        <div className="content_text">
          <div className="menu_text"><span href="#" className="active">Agreements</span></div>
          <ul className="submenu_text">
            <li className="active" onClick={this.setActive.bind(this)}><Link to="">Agreements</Link></li>
          </ul>
        </div>
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)} title={this.state.title} content={this.state.content}></ModalBox>        
      </div>
    );
  }

}

export default AgreementLeftSideBox;
