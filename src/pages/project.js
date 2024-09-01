import React, {useRef, useState} from 'react';
import {Divider, Avatar, List, Col, Row} from 'antd';

import _2048Icon from '@site/static/img/2048-ai-icon.webp';
import handwritingNotesIcon from '@site/static/img/handwriting-note-icon.webp'

const personalProjects = [
    {
        title: '2048 Game (with AI)',
        icon: _2048Icon,
        description: 'This is an Android 2048 game. It has an AI that can play the game automatically. The AI is based on the Monte Carlo Simulation algorithm.'
    },
    {
        title: 'Handwriting Note',
        icon: handwritingNotesIcon,
        description: 'This is an Android app that allows you to take handwritten notes. This app was built during the era of Material Design. By that time, third party libraries were needed to make apps look materialized.'
    }
];

import Layout from '@theme/Layout';

const Project = () => {
    return (
        <Layout
            title={`Publication`}
            description="">
            <main>
                <div style={{padding: "16px"}}>
                    <Row>
                        <Col span={11}>
                            <Divider orientation="left">Academic Projects</Divider>
                            <p>Under Construction ...</p>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={11}>
                            <Divider orientation="left">Hobby Projects</Divider>
                            <p>*These apps are temprarily not available on GooglePlay store.</p>
                            <List
                                itemLayout="horizontal"
                                dataSource={personalProjects}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.icon}/>}
                                            title={<a href="https:/play.google.com">{item.title}</a>}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                </div>
            </main>
        </Layout>
    );
};
export default Project;