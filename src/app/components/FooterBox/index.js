/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import { connect }                from 'react-redux';
import * as eventActions          from '../../redux/modules/event';
import ModalBox                   from '../ModalBox';

class FooterBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState                : false,
      title                         : '',
      content                       : '',
      titleLicence                  : '',
      contentLicence                : '',
      titlePrivacy                  : '',
      contentPrivacy                : '',
      titleSecurity                 : '',
      contentSecurity               : '',
      openModalLicence              : false,
      openModalPrivacy              : false,
      openModalSecurity             : false
    }

    this.openDialogLicence          = this.openDialogLicence.bind(this);
    this.openDialogPrivacy          = this.openDialogPrivacy.bind(this);
    this.openDialogSecurity         = this.openDialogPrivacy.bind(this);
    this.removeModalLicence         = this.removeModalLicence.bind(this);
    this.removeModalPrivacy         = this.removeModalPrivacy.bind(this);

  }

  componentWillMount() {
    this.setState({titlePrivacy     : 'Privacy'});
    this.setState({contentPrivacy   : 'Quodsi invenire ut vel, animal inimicus explicari ea duo, \
                                       vidit dicant melius in mei. His ex semper intellegam.\
                                      In mei augue sapientem. Mea cu option theophrastus.\
                                       Ex labitur repudiare voluptatibus melad.'});
    this.setState({titleLicence     : 'Software Licence Agreements'});
    this.setState({contentLicence   : 'Quodsi invenire ut vel, animal inimicus explicari ea duo,\
                                      vidit dicant melius in mei. His ex semper intellegam.\
                                      In mei augue sapientem. Mea cu option theophrastus.\
                                      Ex labitur repudiare voluptatibus melad'});
    this.setState({titleSecurity    : 'Security'});
    this.setState({contentSecurity  : 'Quodsi invenire ut vel, animal inimicus explicari ea duo,\
                                      vidit dicant melius in mei. His ex semper intellegam.\
                                      In mei augue sapientem. Mea cu option theophrastus.\
                                      Ex labitur repudiare voluptatibus melad.'});
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  openDialogLicence() {
      this.setState({openModalLicence : true});
  }

  removeModalLicence() {
    // this.setState({openModalLicence : false});
    window.location = '/';
  }

  openDialogPrivacy() {
      
      this.setState({openModalPrivacy : true});
  }

  removeModalPrivacy() {
    window.location = '/';
  }

  openDialogSecurity() {
      this.setState({openModalSecurity : true});
  }

  removeModalSecurity() {
    window.location = '/';
  }

  gotoLicence() {
    console.log("CurrentView DB: ", this.props.currentView);
    onFilter('licence');
  }

  render() {

    return (
      <div className="text_footer_color">
        <div className="row">
              <div className="text-center"><a href="licence" onClick={this.gotoLicence.bind(this)}>Software Licence Agreements</a>&nbsp;|&nbsp;<a href="privacy">Privacy Statement</a>&nbsp;|&nbsp;<a href="security">Security</a></div>
              <div className="text-center ">©2017 Claimzen, Inc. All rights reserved.</div>
        </div>        
      </div>
      
    );
  }

}

FooterBox.PropTypes = {
  currentView  : PropTypes.string.isRequired,
  // filter       : PropTypes.string,
  onFilter     : PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    // filter:       state.filter.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      onFilter:  (filterText) => dispatch(eventActions.filterTable(filterText)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterBox);

// export default FooterBox;
