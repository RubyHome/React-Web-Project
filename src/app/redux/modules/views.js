import moment from 'moment';

const dateFormat              = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const ENTER_HOME_VIEW         = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW         = 'LEAVE_HOME_VIEW';
const ENTER_COMPONENTS_VIEW   = 'ENTER_COMPONENTS_VIEW';
const LEAVE_COMPONENTS_VIEW   = 'LEAVE_COMPONENTS_VIEW';
const ENTER_ABOUT_VIEW        = 'ENTER_ABOUT_VIEW';
const LEAVE_ABOUT_VIEW        = 'LEAVE_ABOUT_VIEW';
const ENTER_OPENCASE_VIEW     = 'ENTER_OPENCASE_VIEW';
const LEAVE_OPENCASE_VIEW     = 'LEAVE_OPENCASE_VIEW';
const ENTER_CLOSECASE_VIEW    = 'ENTER_CLOSECASE_VIEW';
const LEAVE_CLOSECASE_VIEW    = 'LEAVE_CLOSECASE_VIEW';
const ENTER_REPORTS_VIEW      = 'ENTER_REPORTS_VIEW';
const LEAVE_REPORTS_VIEW      = 'LEAVE_REPORTS_VIEW';

// /////////////////////
// reducer
// /////////////////////
const initialState = {
  currentView:  'not set',
  enterTime:    null,
  leaveTime:    null,
  value:       ''
};

export default function (state = initialState, action) {
  switch (action.type) {

  case ENTER_HOME_VIEW:
  case ENTER_COMPONENTS_VIEW:
  case ENTER_ABOUT_VIEW:
  case ENTER_OPENCASE_VIEW:
  case ENTER_CLOSECASE_VIEW:
  case ENTER_REPORTS_VIEW:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime,
        value:        action.value
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
  case LEAVE_COMPONENTS_VIEW:
  case LEAVE_ABOUT_VIEW:
  case LEAVE_OPENCASE_VIEW:
  case LEAVE_CLOSECASE_VIEW:
  case LEAVE_REPORTS_VIEW:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function enterHome(time = moment().format(dateFormat)) {
  console.log("EnterHoome Clicked");
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveHome(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterComponents(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveComponents(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterAbout(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_ABOUT_VIEW,
    currentView:  'about',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveAbout(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_ABOUT_VIEW,
    currentView:  'about',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterOpenCase(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_OPENCASE_VIEW,
    currentView:  'opencase',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveOpenCase(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_OPENCASE_VIEW,
    currentView:  'opencase',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterCloseClaim(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_CLOSECASE_VIEW,
    currentView:  'closeclaim',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveCloseClaim(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_CLOSECASE_VIEW,
    currentView:  'closeclaim',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterReports(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_REPORTS_VIEW,
    currentView:  'reports',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveReports(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_REPORTS_VIEW,
    currentView:  'reports',
    enterTime:    null,
    leaveTime:    time
  };
}

export function clickMenu(time = moment().format(dateFormat)) {
  console.log("clickMenu Clicked");
  return {
    type:         'CLICK_MENU',
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null,
    value:        'profile'
  };
}