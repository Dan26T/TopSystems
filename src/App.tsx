import { Collapse } from 'antd';
import React from 'react';
import UsersContainer from "./components/Users/UsersContainer";
import {AppStateType} from "./reduxStore/store";

type PropsType = {
    state: AppStateType,
    dispatch: any
}
const { Panel } = Collapse;
function callback(key:number) {
    console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function App(props:PropsType) {
  return <div>
      <UsersContainer />
      <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
          </Panel>
      </Collapse>
      </div>
}

export default App;
