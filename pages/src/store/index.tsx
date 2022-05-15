import React, { useReducer, ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
}

interface Action {
  type: string;
  payload: {
    chance: null;
    currentChanceVos: null;
  };
}

const initialState = {};

const reducer = (state: {}, action: Action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const Context: any = React.createContext({});

const StoreProvider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        storeValue: state,
        dispatch
      }}
    >
      {props.children || null}
    </Context.Provider>
  );
};

export { Context, StoreProvider };
