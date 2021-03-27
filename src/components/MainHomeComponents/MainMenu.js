import axios from 'axios';
import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const { TabPane } = Tabs;

const numFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
            typeDish : 2,
            dishByType: {},
            dishImg: []
        }
    }

    componentDidMount() {
        this.init();
    }

    init() {
        this.getDishByType(2);
        this.getAllImg();
    }

    getDishByType = (type) => {
        axios.get(`http://localhost:8000/dish/${type}`)
            .then((response) => {
                let dishByType = this.state.dishByType;
                dishByType[type] = response.data;
                this.setState({
                    dishByType
                })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    getAllImg = () => {
        axios.get(`http://localhost:8000/dish_img`)
            .then((response) => {
                this.setState({
                    dishImg: response.data
                })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    getImg = (id) => {
        for(let i of this.state.dishImg){
            if(i.DISH_ID === id) {
                const a = require("../../assets/" + i.SRC.replace('./', ''))
                return a.default
            }
        }
    }

    onChangeDish = (e) => {
        this.setState({
            typeDish : e
        })
        this.getDishByType(e)
    }

    onChooseDish = (dish) => {
        console.log(dish);
    }

    render() {
        const { typeDish, dishByType } = this.state;
        return (
            <Tabs defaultActiveKey={typeDish} centered tabPosition="top" onChange={this.onChangeDish}>
                <TabPane tab="Món chính" key="2">
                    <div>
                        <ul className="list-group list-group-flush">
                            {dishByType[typeDish] && dishByType[typeDish].length > 0 && dishByType[typeDish].map(item => {
                                return <li className="list-group-item" key={item.DISH_ID}>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <div className="d-flex flex-row">
                                            <img className="img-menu" src={this.getImg(item.DISH_ID)} alt='img' />
                                            <div className="d-flex flex-column align-items-start pl-3 w-75">
                                                <span className="font-weight-bold dish-title">{item.NAME}</span>
                                                <span>{item.DESCRIPTION}</span>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center justify-content-center'>
                                            <span className="dish-price pr-5">{numFormat(item.PRICE)} VND</span>
                                            <Button
                                                type="primary"
                                                shape="circle"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                                onClick={() => this.onChooseDish(item)}
                                                icon={<PlusOutlined />} />
                                        </div>
                                    </div>
                                </li>;
                            })}
                        </ul>
                    </div>
                </TabPane>
                <TabPane tab="Món phụ" key="3">
                    <div>
                        <ul className="list-group list-group-flush">
                            {dishByType[typeDish] && dishByType[typeDish].length > 0 && dishByType[typeDish].map(item => {
                                return <li className="list-group-item" key={item.DISH_ID}>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <div className="d-flex flex-row">
                                            <img className="img-menu" src={this.getImg(item.DISH_ID)} alt='img' />
                                            <div className="d-flex flex-column align-items-start pl-3 w-75">
                                                <span className="font-weight-bold dish-title">{item.NAME}</span>
                                                <span>{item.DESCRIPTION}</span>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center justify-content-center'>
                                            <span className="dish-price pr-5">{numFormat(item.PRICE)} VND</span>
                                            <Button
                                                type="primary"
                                                shape="circle"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                                onClick={() => this.onChooseDish(item)}
                                                icon={<PlusOutlined />} />
                                        </div>
                                    </div>
                                </li>;
                            })}
                        </ul>
                    </div>

                </TabPane>
                <TabPane tab="Lẩu" key="1">
                    <div>
                        <ul className="list-group list-group-flush">
                            {dishByType[typeDish] && dishByType[typeDish].length > 0 && dishByType[typeDish].map(item => {
                                return <li className="list-group-item" key={item.DISH_ID}>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <div className="d-flex flex-row">
                                            <img className="img-menu" src={this.getImg(item.DISH_ID)} alt='img' />
                                            <div className="d-flex flex-column align-items-start pl-3 w-75">
                                                <span className="font-weight-bold dish-title">{item.NAME}</span>
                                                <span>{item.DESCRIPTION}</span>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center justify-content-center'>
                                            <span className="dish-price pr-5">{numFormat(item.PRICE)} VND</span>
                                            <Button
                                                type="primary"
                                                shape="circle"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                                onClick={() => this.onChooseDish(item)}
                                                icon={<PlusOutlined />} />
                                        </div>
                                    </div>
                                </li>;
                            })}
                        </ul>
                    </div>
                </TabPane>
                <TabPane tab="Thức uống" key="4">
                    <div>
                        <ul className="list-group list-group-flush">
                            {dishByType[typeDish] && dishByType[typeDish].length > 0 && dishByType[typeDish].map(item => {
                                return <li className="list-group-item" key={item.DISH_ID}>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <div className="d-flex flex-row">
                                            <img className="img-menu" src={this.getImg(item.DISH_ID)} alt='img' />
                                            <div className="d-flex flex-column align-items-start pl-3 w-75">
                                                <span className="font-weight-bold dish-title">{item.NAME}</span>
                                                <span>{item.DESCRIPTION}</span>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center justify-content-center'>
                                            <span className="dish-price pr-5">{numFormat(item.PRICE)} VND</span>
                                            <Button
                                                type="primary"
                                                shape="circle"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                                onClick={() => this.onChooseDish(item)}
                                                icon={<PlusOutlined />} />
                                        </div>
                                    </div>
                                </li>;
                            })}
                        </ul>
                    </div>
                </TabPane>
                <TabPane tab="Tráng miệng" key="5">
                    <div>
                        <ul className="list-group list-group-flush">
                            {dishByType[typeDish] && dishByType[typeDish].length > 0 && dishByType[typeDish].map(item => {
                                return <li className="list-group-item" key={item.DISH_ID}>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <div className="d-flex flex-row">
                                            <img className="img-menu" src={this.getImg(item.DISH_ID)} alt='img' />
                                            <div className="d-flex flex-column align-items-start pl-3 w-75">
                                                <span className="font-weight-bold dish-title">{item.NAME}</span>
                                                <span>{item.DESCRIPTION}</span>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center justify-content-center'>
                                            <span className="dish-price pr-5">{numFormat(item.PRICE)} VND</span>
                                            <Button
                                                type="primary"
                                                shape="circle"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                                onClick={() => this.onChooseDish(item)}
                                                icon={<PlusOutlined />} />
                                        </div>
                                    </div>
                                </li>;
                            })}
                        </ul>
                    </div>
                </TabPane>
            </Tabs>
        );
    }
}