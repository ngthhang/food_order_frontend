import React, { Component } from "react";
import { Table, Tag, Divider, Button } from "antd";
import { Link, Redirect } from "react-router-dom";
import { numFormat } from "../utils";
import axios from "axios";
import "../styles/order-screen.css";

const columns = [
  {
    title: "Order Id",
    dataIndex: "order_id",
    key: "order_id",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <Tag color={status === "CHỜ THANH TOÁN" ? "green" : "processing"}>
        {status}
      </Tag>
    ),
  },
  {
    title: "Tổng tiền",
    key: "totalPrice",
    dataIndex: "totalPrice",
    render: (price) => <span>{numFormat(price)} VND</span>,
  },
];

export default class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      table: this.props.match.params.table,
      tmpOrderDetail: [],
      tmpDishPrice: 0,
      orderDetail: {},
      allOrderAtTable: [],
      expandedRowKeys: [],
      isExpanded: false,
      isPayment: false,
      redirect: false
    };
  }

  componentDidMount() {
    this.init();
    this.updateRealtime = setInterval(() => {
      if (!this.state.isPayment) {
        this.init();
      }
    }, 5000);
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
    let data = this.state.data;
    if (data.length > 0) {
      let newData = [];
      for (let order of allOrders) {
        const response = await axios.get(
          `http://localhost:8000/order_detail/${order.ORDER_ID}`
        );
        let orderDetail = response.data;
        newData.push(await this.calculateOrderDetail(order, orderDetail));
      }
      this.setState({
        data: newData,
      });
      return;
    }

    for (let order of allOrders) {
      const response = await axios.get(
        `http://localhost:8000/order_detail/${order.ORDER_ID}`
      );
      let orderDetail = response.data;
      data.push(await this.calculateOrderDetail(order, orderDetail));
    }
    this.setState({
      data,
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

  onTableRowExpand = (expanded, record) => {
    let isExpanded = false;
    var keys = [];
    if (expanded) {
      keys.push(record.key);
    }
    if (keys.length > 0) {
      isExpanded = true;
    }
    this.setState({ expandedRowKeys: keys, isExpanded });
  };

  onPayment = () => {
    clearInterval(this.updateRealtime);
    this.setState({ isPayment: true, redirect: true });
  };

  render() {
    const { data, table, isExpanded, redirect } = this.state;
    return (
      <>
        {redirect ? (
          <Redirect push to={`/payment/${table}`} />
        ) : (
          <div
            className={`d-flex flex-column align-items-center justify-content-start w-100 img-background ${
              isExpanded ? "height-table" : null
            }`}
          >
            <div className="d-flex align-self-start pb-2">
              <h1 className="py-2 text-white">FOOD ORDER</h1>
            </div>
            <div className="d-flex flex-column align-items-center mb-5 justify-content-center w-50 pt-5 table-box-shadow bg-white">
              <div className="d-flex flex-row align-items-center justify-content-between w-100 px-5">
                <h5 className="m-0">Đơn đặt món của bàn {table}</h5>
                <Button
                  className=""
                  type="primary"
                  danger
                  onClick={this.onPayment}
                >
                  THANH TOÁN
                </Button>
              </div>
              {data && data.length > 0 && (
                <Table
                  className="w-75 mt-4 border"
                  columns={columns}
                  onExpand={this.onTableRowExpand}
                  dataSource={data}
                  pagination={false}
                  expandable={{
                    expandedRowRender: (record) =>
                      record.detail.map((item) => {
                        return (
                          <div key={item.DISH_ID}>
                            <div className="d-flex flex-column py-2">
                              <div className="d-flex flex-row">
                                <span className="pr-4 ">{item.DISH_NAME}</span>
                                <span>x</span>
                                <span className="pl-1">{item.QUANTITY}</span>
                              </div>
                              <span>Gía tiền: {numFormat(item.PRICE)} VND</span>
                              <span className="note-text">
                                Ghi chú món ăn:{" "}
                                {item.NOTE === "" ? "không có" : item.NOTE}
                              </span>
                            </div>
                            <Divider />
                          </div>
                        );
                      }),
                  }}
                />
              )}
              <div className="d-flex flex-row align-items-center justify-content-around py-3">
                <Link to={`/table/${table}`}>
                  <Button
                    type="primary"
                    className="d-flex align-items-center px-3 py-3"
                    shape="round"
                  >
                    Trở về xem thực đơn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
