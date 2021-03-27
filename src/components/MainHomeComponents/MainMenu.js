import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const { TabPane } = Tabs;
export default class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
        }
    }
    render() {
        return (
            <Tabs defaultActiveKey="1" centered tabPosition="top">
                <TabPane tab="Món chính" key="1">
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button 
                                            type="primary" 
                                            shape="circle" 
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }} 
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </TabPane>
                <TabPane tab="Món phụ" key="2">
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </TabPane>
                <TabPane tab="Lẩu" key="3">
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </TabPane>
                <TabPane tab="Thức uống" key="4">
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </TabPane>
                <TabPane tab="Tráng miệng" key="5">
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button 
                                            type="primary" 
                                            shape="circle" 
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }} 
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div className="img-menu"></div>
                                        <div className="d-flex flex-column align-items-start pl-3 w-75">
                                            <span className="font-weight-bold dish-title">Lẩu cá</span>
                                            <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-center'>
                                        <span className="dish-price pr-5">150.000 VND</span>
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            icon={<PlusOutlined />} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </TabPane>
            </Tabs>
        );
    }
}