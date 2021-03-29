import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Table, Divider } from "antd";
import "../styles/payment-screen.css";
import { CloseOutlined } from "@ant-design/icons";
import { numFormat } from "../utils";
import axios from "axios";

const columns = [
  {
    title: "Tên món",
    dataIndex: "NAME",
    key: "NAME",
  },
  {
    title: "Số lượng",
    key: "QUANTITY",
    dataIndex: "QUANTITY",
  },
  {
    title: "Gía tiền",
    key: "PRICE",
    dataIndex: "PRICE",
    render: (price) => <span>{numFormat(price)} VND</span>,
  },
  {
    title: "Thành tiền",
    key: "TOTAL_DISH_PRICE",
    dataIndex: "TOTAL_DISH_PRICE",
    render: (price) => <span>{numFormat(price)} VND</span>,
  },
];

export default class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: this.props.match.params.table,
      redirect: false,
      data: [],
      totalPrice: 0,
      taxPrice: 0,
    };
  }

  componentDidMount() {
    this.init();
  }

  init = async () => {
    let allOrders = await this.getAllOrderAtTable();
    await this.getOrderDetail(allOrders);
  };

  getAllOrderAtTable = async () => {
    const { table } = this.state;
    const response = await axios.get(
      `http://localhost:8000/order/table/${table}`
    );
    return response.data;
  };

  getOrderDetail = async (allOrders) => {
    let totalPrice = 0;
    let taxPrice = 0;
    let data = this.state.data;
    let allDishes = {};
    for (let order of allOrders) {
      const response = await axios.get(
        `http://localhost:8000/order_detail/${order.ORDER_ID}`
      );
      let orderDetail = response.data;
      for (let dish of orderDetail) {
        if (allDishes[dish.DISH_ID]) {
          allDishes[dish.DISH_ID].QUANTITY += dish.QUANTITY;
          let price = allDishes[dish.DISH_ID].PRICE;
          allDishes[dish.DISH_ID].TOTAL_DISH_PRICE =
            price * allDishes[dish.DISH_ID].QUANTITY;
        } else {
          let dishDetail = await this.getDish(dish.DISH_ID);
          allDishes[dish.DISH_ID] = {
            key: dish.DISH_ID,
            QUANTITY: dish.QUANTITY,
            NAME: dishDetail.NAME,
            PRICE: dishDetail.PRICE,
            TOTAL_DISH_PRICE: dishDetail.PRICE * dish.QUANTITY,
          };
        }
      }
    }

    for (let i in allDishes) {
      data.push(allDishes[i]);
      totalPrice += allDishes[i].TOTAL_DISH_PRICE;
    }

    taxPrice = totalPrice * 0.1;

    this.setState({
      data,
      totalPrice,
      taxPrice,
    });
  };

  calculateOrderDetail = async (order, orderDetail) => {
    let detail = [];
    var totalPrice = 0;
    for (let i of orderDetail) {
      let dish = await this.getDish(i.DISH_ID);
      let totalDishPrice = dish.PRICE * i.QUANTITY;
      totalPrice = totalPrice + totalDishPrice;
      detail.push({
        DISH_ID: i.DISH_ID,
        DISH_NAME: dish.NAME,
        PRICE: dish.PRICE,
        QUANTITY: i.QUANTITY,
        NOTE: i.NOTE,
      });
    }
    return {
      key: order.ORDER_ID,
      status: order.STATUS,
      order_id: order.ORDER_ID,
      totalPrice,
      detail,
    };
  };

  getDish = async (id) => {
    const response = await axios.get(`http://localhost:8000/dish_price/${id}`);
    return response.data[0];
  };

  goBackMainPage = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { table, redirect, data, totalPrice, taxPrice } = this.state;
    return (
      <>
        {redirect ? (
          <Redirect push to="/" />
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-start w-100 img-background">
            <div className="d-flex align-self-start pb-2">
              <h1 className="py-2 text-white">FOOD ORDER</h1>
            </div>
            <div className="d-flex flex-column align-items-center mb-5 justify-content-center w-50 pt-5 px-5 table-box-shadow bg-white">
              <div className="d-flex flex-row align-items-center justify-content-between w-100">
                <h5 className="m-0">Hoá đơn bàn {table}</h5>
                <Button
                  className="d-flex align-items-center justify-content-center"
                  onClick={this.goBackMainPage}
                  shape="circle"
                  type="primary"
                  icon={<CloseOutlined />}
                />
              </div>
              {data.length > 0 ? (
                <Table
                  className="w-100 mt-4 border"
                  columns={columns}
                  onExpand={this.onTableRowExpand}
                  dataSource={data}
                  pagination={false}
                />
              ) : null}
              <div className="d-flex flex-column align-items-end justify-content-end w-100 py-3">
                <span className="price-text">
                  Thành tiền: {numFormat(totalPrice)} VND
                </span>
                <span className="price-text pb-2">
                  VAT (10%): {numFormat(taxPrice)} VND
                </span>
                <span className="price-text price-total pt-2 border-top">
                  Tổng số tiền sau thuế: {numFormat(totalPrice + taxPrice)} VND
                </span>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center py-3">
                <span className="thank-text">
                  Xin quý khách vui lòng thanh toán tại quầy
                </span>
                <span className="thank-text">
                  Cảm ơn quý khách đã ủng hộ nhà hàng chúng tôi
                </span>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
