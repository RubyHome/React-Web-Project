import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Licence }            from '../../views';


const mapStateToProps = (state) => {
  console.log("Licence State: ", state.views.currentView);
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
 
  return bindActionCreators(
    {
    },
    dispatch
  );
  
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions : bindActionCreators(
//       {
//         ...viewsActions
//       },
//       dispatch)
//   };
// };

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterHome: () => dispatch(viewsActions.enterHome()),
//     leaveHome: () => dispatch(viewsActions.leaveHome())
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Licence);
