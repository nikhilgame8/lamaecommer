const initialState = [];

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
        state.push(action.payload);
        return state;
      }
    case "DECREMENT": {
      state.splice(action.payload, 1);
      return state;
    }
    case "REPLACEDATA": {
      state[action.payload.replaceIndex] = action.payload.pushData;
      console.log(action.payload.replaceIndex)
      return state;
    }
    case "INCCURRENT": {
      state[action.payload].itemcount = state[action.payload].itemcount + 1;
      return state;
    }
    case "DECCURRENT": {
      if (state[action.payload].itemcount > 1) {
        state[action.payload].itemcount = state[action.payload].itemcount - 1;
      }
      return state;
    }
    case "REMOVEALL": {
      state.splice(0, state.length);
      return state;
    }
    default:
      return state;
  }
};

export { changeTheNumber };
