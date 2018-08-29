import { NOTIFY_USER } from '../actions/types';

const initialState = {
  message: null,
  messageType: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_USER: {
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };
    }

    default:
      // Clear previous state (an invalid login prior to a succesful one)
      return {
        ...state,
        message: '',
        messageType: ''
      };
  }
}
