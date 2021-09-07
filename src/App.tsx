import React from 'react';
import UsersContainer from "./components/Users/UsersContainer";
import {AppStateType} from "./reduxStore/store";
import {Alert, Col, Layout, Row} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import s from "./components/Users/users.module.css";
import {User} from "./components/Users/User";

type PropsType = {
    state: AppStateType,
    dispatch: any
}

function App(props:PropsType) {
    return <Layout>
        <Header style={{textAlign:"center", position:"fixed", width: '100%', zIndex:20 }}>
            <Row>
                <Col span={24}>
                    <h1 style={{ color: "antiquewhite"}}>Список пользователей</h1>
                </Col>
            </Row></Header>
        <Content style={{marginTop: 80}}><div className={s.container}>
            <UsersContainer />
        </div></Content>
        <Footer>
            footer
        </Footer>
    </Layout>
}

export default App;
