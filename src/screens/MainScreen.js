import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { MainHeader } from "../components/MainHomeComponents";
import { Tabs, Button, Input, message } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Redirect } from 'react-router-dom'
import {numFormat, getRecommendImg} from '../utils';
import "antd/dist/antd.css";
const { TabPane } = Tabs;


export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true,
      typeDish: 2,
      dishByType: {},
      dishImg: [],
      dishRecommend: [],
      totalDish: 0,
      currentDishes: [],
      totalPrice: 0,
      table: this.props.match.params.table,
      completedOrder: false,
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    this.getDishByType(2);
    this.getAllImg();
    this.getRecommendDish();
  }

  // GET DATA FOR MENU

  getDishByType = (type) => {
    axios
      .get(`http://localhost:8000/dish/${type}`)
      .then((response) => {
        let dishByType = this.state.dishByType;
        dishByType[type] = response.data;
        this.setState({
          dishByType,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  getRecommendDish = () => {
    axios
      .get(`http://localhost:8000/dish_recommend`)
      .then((response) => {
        let dishRecommend = this.state.dishRecommend;
        dishRecommend = response.data;
        this.setState({
          dishRecommend,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  isRecommendDish = (id) => {
    for (let i of this.state.dishRecommend) {
      if (i.DISH_ID === id) {
        return true;
      }
    }
    return false;
  };

  getAllImg = () => {
    axios
      .get(`http://localhost:8000/dish_img`)
      .then((response) => {
        this.setState({
          dishImg: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  getImg = (id) => {
    for (let i of this.state.dishImg) {
      if (i.DISH_ID === id) {
        const a = require("../assets/" + i.SRC.replace("./", ""));
        return a.default;
      }
    }
  };

  onChangeDish = (e) => {
    this.setState({
      typeDish: e,
    });
    this.getDishByType(e);
  };

  onChooseDish = (dish) => {
    let { currentDishes } = this.state;
    if (currentDishes.length > 0) {
      for (let item of currentDishes) {
        if (item.DISH_ID === dish.DISH_ID) {
          item.QTY++;
          this.setState({
            currentDishes,
          });
          this.onChangeTotalPrice(currentDishes);
          this.onChangeTotalDish(currentDishes);
          return;
        }
      }
    }

    dish.QTY = 1;
    dish.NOTE = "";
    currentDishes.push(dish);
    this.setState({
      currentDishes,
    });
    this.onChangeTotalPrice(currentDishes);
    this.onChangeTotalDish(currentDishes);
  };

  // HANDLE ADDING DISH TO CART
  onClickOrderBtn = () => {
    const { currentDishes, table } = this.state;
    if (currentDishes.length <= 0) {
      message.error("Bạn chưa thêm món vào giỏ");
      return;
    }

    axios.post("http://localhost:8000/order", {
        currentDishes,
        table,
      })
      .then((response) => {
        console.log(response);
        message.success("Đặt món thành công, món ăn sẽ được lên trong 20 phút nữa");
      })
      .catch((error) => {
        console.log(error);
        message.error("Đặt món thất bại");
      });
    
    setTimeout(() => {
      this.setState({ completedOrder: true });
    }, 2000)
  };

  onChangeQtyDish = (dishId, value) => {
    let { currentDishes } = this.state;
    for (let item of currentDishes) {
      if (item.DISH_ID === dishId) {
        if (item.QTY === 1 && value < 0) {
          currentDishes.splice(currentDishes.indexOf(item), 1);
          break;
        }
        if (value < 0) {
          item.QTY--;
        } else {
          item.QTY++;
        }
        break;
      }
    }

    this.onChangeTotalPrice(currentDishes);
    this.onChangeTotalDish(currentDishes);

    this.setState({
      currentDishes,
    });
  };

  addNote = (dishId, e) => {
    let note = e.target.value;
    const { currentDishes } = this.state;
    for (let item of currentDishes) {
      if (item.DISH_ID === dishId) {
        item.NOTE = note;
        break;
      }
    }

    this.setState({
      currentDishes,
    });
  };

  onChangeTotalPrice = (currentDishes) => {
    let total = 0;
    for (let item of currentDishes) {
      total += item.QTY * item.PRICE;
    }

    this.setState({
      totalPrice: total,
    });
  };

  onChangeTotalDish = (currentDishes) => {
    let total = 0;
    for (let item of currentDishes) {
      total += item.QTY;
    }

    this.setState({
      totalDish: total,
    });
  };

  render() {
    const {
      typeDish,
      dishByType,
      currentDishes,
      totalPrice,
      totalDish,
      table,
      completedOrder,
    } = this.state;
    return (
      <>
        {completedOrder ? (
          <Redirect push to={`/order/table/${table}`} />
        ) : (
          <div className="w-100 h-100 d-flex flex-row align-items-start">
            <div className="d-flex flex-column align-items-start main-header">
              <MainHeader />

              {/* MAIN MENU HERE */}
              <Tabs
                defaultActiveKey={typeDish}
                centered
                tabPosition="top"
                onChange={this.onChangeDish}
              >
                <TabPane tab="Món chính" key="2">
                  <div>
                    <ul className="list-group list-group-flush">
                      {dishByType[typeDish] &&
                        dishByType[typeDish].length > 0 &&
                        dishByType[typeDish].map((item) => {
                          return (
                            <li className="list-group-item" key={item.DISH_ID}>
                              <div className="d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex flex-row">
                                  <img
                                    className="img-menu"
                                    src={this.getImg(item.DISH_ID)}
                                    alt="img"
                                  />
                                  <div className="d-flex flex-column align-items-start pl-3 w-75">
                                    <span className="font-weight-bold dish-title">
                                      {item.NAME}{" "}
                                      {this.isRecommendDish(item.DISH_ID) ? (
                                        <img
                                          className="img-recommend"
                                          src={getRecommendImg()}
                                          alt="img"
                                        />
                                      ) : null}
                                    </span>
                                    <span>{item.DESCRIPTION}</span>
                                    <span>
                                      Khẩu phần: {item.RATION} người
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <span className="dish-price pr-5">
                                    {numFormat(item.PRICE)} VND
                                  </span>
                                  <Button
                                    type="primary"
                                    shape="circle"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                    onClick={() => this.onChooseDish(item)}
                                    icon={<PlusOutlined />}
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </TabPane>
                <TabPane tab="Món phụ" key="3">
                  <div>
                    <ul className="list-group list-group-flush">
                      {dishByType[typeDish] &&
                        dishByType[typeDish].length > 0 &&
                        dishByType[typeDish].map((item) => {
                          return (
                            <li className="list-group-item" key={item.DISH_ID}>
                              <div className="d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex flex-row">
                                  <img
                                    className="img-menu"
                                    src={this.getImg(item.DISH_ID)}
                                    alt="img"
                                  />
                                  <div className="d-flex flex-column align-items-start pl-3 w-75">
                                    <span className="font-weight-bold dish-title">
                                      {item.NAME}{" "}
                                      {this.isRecommendDish(item.DISH_ID) ? (
                                        <img
                                          className="img-recommend"
                                          src={getRecommendImg()}
                                          alt="img"
                                        />
                                      ) : null}
                                    </span>
                                    <span>{item.DESCRIPTION}</span>
                                    <span>
                                      Khẩu phần: {item.RATION} / người
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <span className="dish-price pr-5">
                                    {numFormat(item.PRICE)} VND
                                  </span>
                                  <Button
                                    type="primary"
                                    shape="circle"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                    onClick={() => this.onChooseDish(item)}
                                    icon={<PlusOutlined />}
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </TabPane>
                <TabPane tab="Lẩu" key="1">
                  <div>
                    <ul className="list-group list-group-flush">
                      {dishByType[typeDish] &&
                        dishByType[typeDish].length > 0 &&
                        dishByType[typeDish].map((item) => {
                          return (
                            <li className="list-group-item" key={item.DISH_ID}>
                              <div className="d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex flex-row">
                                  <img
                                    className="img-menu"
                                    src={this.getImg(item.DISH_ID)}
                                    alt="img"
                                  />
                                  <div className="d-flex flex-column align-items-start pl-3 w-75">
                                    <span className="font-weight-bold dish-title">
                                      {item.NAME}{" "}
                                      {this.isRecommendDish(item.DISH_ID) ? (
                                        <img
                                          className="img-recommend"
                                          src={getRecommendImg()}
                                          alt="img"
                                        />
                                      ) : null}
                                    </span>
                                    <span>{item.DESCRIPTION}</span>
                                    <span>
                                      Khẩu phần: {item.RATION} / người
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <span className="dish-price pr-5">
                                    {numFormat(item.PRICE)} VND
                                  </span>
                                  <Button
                                    type="primary"
                                    shape="circle"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                    onClick={() => this.onChooseDish(item)}
                                    icon={<PlusOutlined />}
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </TabPane>
                <TabPane tab="Thức uống" key="4">
                  <div>
                    <ul className="list-group list-group-flush">
                      {dishByType[typeDish] &&
                        dishByType[typeDish].length > 0 &&
                        dishByType[typeDish].map((item) => {
                          return (
                            <li className="list-group-item" key={item.DISH_ID}>
                              <div className="d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex flex-row">
                                  <img
                                    className="img-menu"
                                    src={this.getImg(item.DISH_ID)}
                                    alt="img"
                                  />
                                  <div className="d-flex flex-column align-items-start pl-3 w-75">
                                    <span className="font-weight-bold dish-title">
                                      {item.NAME}{" "}
                                      {this.isRecommendDish(item.DISH_ID) ? (
                                        <img
                                          className="img-recommend"
                                          src={getRecommendImg()}
                                          alt="img"
                                        />
                                      ) : null}
                                    </span>
                                    <span>{item.DESCRIPTION}</span>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <span className="dish-price pr-5">
                                    {numFormat(item.PRICE)} VND
                                  </span>
                                  <Button
                                    type="primary"
                                    shape="circle"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                    onClick={() => this.onChooseDish(item)}
                                    icon={<PlusOutlined />}
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </TabPane>
                <TabPane tab="Tráng miệng" key="5">
                  <div>
                    <ul className="list-group list-group-flush">
                      {dishByType[typeDish] &&
                        dishByType[typeDish].length > 0 &&
                        dishByType[typeDish].map((item) => {
                          return (
                            <li className="list-group-item" key={item.DISH_ID}>
                              <div className="d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex flex-row">
                                  <img
                                    className="img-menu"
                                    src={this.getImg(item.DISH_ID)}
                                    alt="img"
                                  />
                                  <div className="d-flex flex-column align-items-start pl-3 w-75">
                                    <span className="font-weight-bold dish-title">
                                      {item.NAME}{" "}
                                      {this.isRecommendDish(item.DISH_ID) ? (
                                        <img
                                          className="img-recommend"
                                          src={getRecommendImg()}
                                          alt="img"
                                        />
                                      ) : null}
                                    </span>
                                    <span>{item.DESCRIPTION}</span>
                                    <span>
                                      Khẩu phần: {item.RATION} / người
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <span className="dish-price pr-5">
                                    {numFormat(item.PRICE)} VND
                                  </span>
                                  <Button
                                    type="primary"
                                    shape="circle"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                    onClick={() => this.onChooseDish(item)}
                                    icon={<PlusOutlined />}
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </TabPane>
              </Tabs>
            </div>

            {/* MAIN CART */}
            <div className="d-flex flex-column align-items-start justify-content-start main-cart h-100">
              <div className="d-flex flex-row w-100 bg-warning img-cart align-items-center justify-content-around p-2">
                <h1 className='m-0'>Bàn {table}</h1>
                <div className="d-flex flex-column">
                  <span>Bạn đã đặt?</span>
                  <Link to={`/order/table/${table}`}>
                      <Button className='d-flex align-items-center px-3 py-2' type='primary'>Xem món đã đặt</Button>
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-row align-items-end justify-content-between px-3 py-2 bg-white w-100">
                <span>Đơn đặt món</span>
                <span className="total-dish">Tổng món: {totalDish}</span>
              </div>
              <div className="d-flex flex-column align-items-start justify-content-start w-100">
                {currentDishes &&
                  currentDishes.length > 0 &&
                  currentDishes.map((item) => {
                    return (
                      <div
                        className="d-flex flex-row align-items-center justify-content-between w-100 py-4 px-2 border-bottom"
                        key={item.DISH_ID}
                      >
                        <div className="d-flex flex-row">
                          <div className="d-flex flex-column align-items-start pl-3">
                            <span className="font-weight-bold dish-title">
                              {item.NAME}
                            </span>
                            <Input
                              placeholder="Note"
                              bordered={false}
                              className="p-0"
                              onChange={(e) => this.addNote(item.DISH_ID, e)}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-center">
                          <span className="pr-3 total-dish">
                            {numFormat(item.PRICE)}
                          </span>
                          <Button
                            shape="circle"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              this.onChangeQtyDish(item.DISH_ID, -1);
                            }}
                            icon={<MinusOutlined />}
                          />
                          <span className="px-3">{item.QTY}</span>
                          <Button
                            type="primary"
                            shape="circle"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            icon={<PlusOutlined />}
                            onClick={() => {
                              this.onChangeQtyDish(item.DISH_ID, 1);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                {currentDishes.length > 0 ? (
                  <div className="d-flex flex-row align-items-end mt-auto justify-content-between pl-3 pr-5 py-4 bg-white w-100">
                    <span>Tổng cộng: {numFormat(totalPrice)} VND</span>
                    <Button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "18px",
                        padding: "20px 30px",
                      }}
                      onClick={this.onClickOrderBtn}
                      type="primary"
                    >
                      ĐẶT MÓN
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
