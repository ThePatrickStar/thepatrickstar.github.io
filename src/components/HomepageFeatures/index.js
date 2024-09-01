import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import {Card, Col, Row, Divider, Timeline} from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const {Meta} = Card;

// import useBaseUrl from '@docusaurus/useBaseUrl';
import PhotoUrl from '@site/static/img/lyk-syd-hyde.jpg';

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <Row>
                    <Col span={11}>
                        <Card
                            hoverable
                            style={{
                                display: "block",
                            }}
                            cover={<img alt="example" src={PhotoUrl}/>}
                        >
                            <Meta title="Yuekang Li (悦康 李)" description="yuekang.li AT unsw.edu.au"/>
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Divider orientation="left">Overview</Divider>
                        <p>
                            Yuekang Li is an ARC DECRA Fellow and a lecturer (similar to Assistant Professor in North American system) at the University of New South Wales.
                            Previously, he was a Research Assistant Professor in Continental-NTU Corporate Lab, Nanyang Technological University.
                            His research interest mainly lies in the field of software engineering and LLM related research.
                            His research work includes software testing techniques (especially fuzzing), as well as other software quality assurance techniques.
                        </p>
                        <p>
                            I'm looking for self-motivated Ph.D. or Master students!🎓 Please drop me an email if you are interested.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}>
                        <Divider orientation="left">Working Experience</Divider>
                        <Timeline
                            mode="left"
                            items={[
                                {
                                    dot: <PlusCircleOutlined />,
                                    color: 'blue',
                                    label: 'Aug 2023 - Now',
                                    children: 'Lecturer @ University of New South Wales (School of Computer Science and Engineering)',
                                },
                                {
                                    label: 'Jan 2021 - Aug 2023',
                                    children: 'Research Assistant Professor @ Nanyang Technological University (Continental-NTU Corporate Lab)',
                                },
                                {
                                    label: 'June 2020 - Jan 2021',
                                    children: 'Research Fellow @ Nanyang Technological University (School of Computer Science and Engineering)',
                                },
                            ]}
                        />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Divider orientation="left">Education</Divider>
                        <Timeline
                            mode="left"
                            items={[
                                {
                                    label: 'Jan 2016 - Jul 2020',
                                    children: 'Ph.D. @ Nanyang Technological University (School of Computer Science and Engineering)',
                                },
                                {
                                    label: 'Aug 2012 - Dec 2015',
                                    children: 'Bachelor @ Nanyang Technological University (School of Computer Science and Engineering)',
                                },
                            ]}
                        />
                    </Col>
                </Row>
                {/*<Divider orientation="left">Awards</Divider>*/}
            </div>
        </section>
    );
}
