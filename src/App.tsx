import React from 'react';
import UsersContainer from "./components/Users/UsersContainer";
import {AppStateType} from "./reduxStore/store";

type PropsType = {
    state: AppStateType,
    dispatch: any
}

function App(props:PropsType) {
    return <div>
      <UsersContainer />
      </div>
}

export default App;
