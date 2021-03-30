import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Table, Button, Divider, message, InputNumber } from "antd";
import { numFormat } from "../utils";

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

export default class CashierScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      isAuth: true,
      table: 0,
      data: [],
      totalPrice: 0,
      taxPrice: 0,
      finalPrice: 0,
      moneyReceived: 0,
      moneyChanged: 0,
      staff: {},
      tables: [],
    };
  }

  componentDidMount() {
    this.init();
  }

  checkAuthentication = () => {
    let token = localStorage.getItem("_c_token");
    if (token) {
      this.setState({
        isAuth: true,
      });
      return;
    } else {
      this.setState({
        isAuth: false,
      });
    }
  };

  getAllTable = async () => {
    const response = await axios.get(`http://localhost:8000/tables`);
    return response.data;
  };

  init = async () => {
    this.checkAuthentication();
    let staff = await this.getStaffInfo();
    const tables = await this.getAllTable();
    this.setState({
      staff: staff,
      tables,
      table: 0,
      data: [],
      totalPrice: 0,
      taxPrice: 0,
      finalPrice: 0,
      moneyReceived: 0,
      moneyChanged: 0,
    });
  };

  getStaffInfo = async () => {
    const token = localStorage.getItem("_c_token");
    const response = await axios.get(
      `http://localhost:8000/staff_login/${token}`
    );
    console.log(response);
    return response.data;
  };

  getAllOrderAtTable = async (tableId) => {
    const response = await axios.get(
      `http://localhost:8000/order/table/${tableId}`
    );
    console.log("table", response.data);
    return response.data;
  };

  getOrderDetail = async (allOrders) => {
    let totalPrice = 0;
    let taxPrice = 0;
    let data = [];
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
    let finalPrice = totalPrice + taxPrice;

    return {
      data,
      totalPrice,
      taxPrice,
      finalPrice,
    };
  };

  showOrderDetail = async (tableId) => {
    let allOrders = await this.getAllOrderAtTable(tableId);
    let { data, totalPrice, taxPrice, finalPrice } = await this.getOrderDetail(
      allOrders
    );
    this.setState({
      data,
      totalPrice,
      taxPrice,
      finalPrice,
      table: tableId,
    });
  };

  getDish = async (id) => {
    const response = await axios.get(`http://localhost:8000/dish_price/${id}`);
    return response.data[0];
  };

  logOut = () => {
    localStorage.removeItem("_c_token");
    this.setState({
      isAuth: false,
    });
  };

  addMoneyReceived = (value) => {
    if (isNaN(value)) {
      message.error("Nhập số tiền không hợp lệ");
    } else {
      this.setState({
        moneyReceived: value,
      });
    }
  };

  createInvoice = async () => {
    const { table, moneyReceived, finalPrice } = this.state;
    if(moneyReceived - finalPrice < 0){
      message.error("Số tiền khách trả không đủ, vui lòng nhập lại")
      return;
    }
    const result = await axios.get(
      `http://localhost:8000/update_status/${table}`
    );
    this.init();
  };

  render() {
    const {
      isAuth,
      staff,
      tables,
      table,
      data,
      finalPrice,
      taxPrice,
      totalPrice,
      moneyReceived,
    } = this.state;
    console.log(data);
    return (
      <>
        {!isAuth ? (
          <Redirect push to="/login" />
        ) : (
          <div className="d-flex flex-column align-items-start justify-content-start w-100 h-100">
            {/* STAFF HEADER BAR */}
            <div className="d-flex flex-row align-items-center justify-content-between w-100 px-3 py-4 border-bottom header-shadow">
              <div className="d-flex flex-row align-items-center justify-content-start w-75">
                <h3 className="m-0">FOOD ORDER</h3>
                <Divider type="vertical" className="" />
                <div className="d-flex flex-column align-items-start justify-content-center px-3">
                  <span className="header-text">
                    Xin chào {staff.USERNAME} - {staff.NAME_STAFF}
                  </span>
                  <span className="header-text">Nhân viên thu ngân</span>
                </div>
              </div>
              <Button
                onClick={this.logOut}
                type="primary"
                shape="round"
                className="btn-shadow d-flex align-items-center mr-5 px-4 py-3"
              >
                Đăng xuất
              </Button>
            </div>
            <div className="d-flex flex-column align-items-start justify-content-start w-100 mt-4">
              <div className="d-flex flex-row w-100 h-100">
                {/* STAFF MENU ORDER SIDE BAR */}
                <div className="w-25 d-flex flex-column align-items-start justify-content-start order-list px-4">
                  <ul className="d-flex w-100 list-group list-group-flush">
                    <li className="list-group-item d-flex flex-row align-items-center justify-content-center bg-dark w-100 border">
                      <h6 className="m-0 text-white">BÀN</h6>
                    </li>
                    {tables &&
                      tables.length > 0 &&
                      tables.map((i) => {
                        return (
                          <li
                            style={{ cursor: "pointer" }}
                            className={`list-group-item d-flex flex-row align-items-center justify-content-between w-100 border ${
                              table === i.TABLE_ID ? "active-order" : null
                            }`}
                            key={i.TABLE_ID}
                            onClick={() => this.showOrderDetail(i.TABLE_ID)}
                          >
                            <div className="d-flex flex-column align-items-start justify-content-center mr-4">
                              <span className="order-text">
                                Bàn số {i.TABLE_ID}
                              </span>
                              <span className="order-text">Tầng {i.FLOOR}</span>
                            </div>
                            <span>Số ghế: {i.NUM_PEOPLE}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>

                {/* STAFF DETAIL ORDER */}
                {data.length > 0 ? (
                  <div className="w-75 d-flex flex-column align-items-center justify-content-center px-5">
                    <span>Hoá đơn cho bàn số {table}</span>

                    <Table
                      className="w-100 mt-4 border"
                      columns={columns}
                      onExpand={this.onTableRowExpand}
                      dataSource={data}
                      pagination={false}
                    />
                    <div className="d-flex flex-column align-items-end justify-content-end w-100 py-3">
                      <span className="price-text">
                        Thành tiền: {numFormat(totalPrice)} VND
                      </span>
                      <span className="price-text pb-2">
                        VAT (10%): {numFormat(taxPrice)} VND
                      </span>
                      <span className="price-text price-total pt-2 border-top">
                        Tổng số tiền sau thuế: {numFormat(finalPrice)} VND
                      </span>
                        <InputNumber
                          placeholder="Nhập tiền khách đưa"
                          className="w-25 py-2 my-2"
                          formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          parser={value => value.replace(/\$\s?|(,*)/g, '')}
                          onChange={this.addMoneyReceived}
                        />
                      <span className="price-text">
                        Tiền thừa:
                        {(moneyReceived - finalPrice) <= 0 ? " 0 VND" : " " + numFormat(moneyReceived - finalPrice) + " VND"}
                      </span>
                      <Button
                        onClick={this.createInvoice}
                        type="primary"
                        className="d-flex align-items-center px-4 py-3 my-3"
                        danger
                      >
                        THANH TOÁN
                      </Button>
                    </div>
                  </div>
                ) : (
                  <span>Bàn chưa có đơn</span>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
