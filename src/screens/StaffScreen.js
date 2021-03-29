import React, { Component } from "react";
import { Divider, Button, Tabs, Table, message } from "antd";
import { Redirect } from "react-router-dom";
import "../styles/staff-screen.css";
import axios from "axios";
// import { numFormat } from '../utils';

const { TabPane } = Tabs;

const columns = [
  {
    title: "Tên món",
    dataIndex: "DISH_NAME",
    key: "DISH_NAME",
  },
  {
    title: "Số lượng",
    key: "QUANTITY",
    dataIndex: "QUANTITY",
  },
  {
    title: "Ghi chú",
    key: "NOTE",
    dataIndex: "NOTE",
  },
];

export default class StaffScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: {},
      isModalVisible: false,
      data: [],
      isAuth: true,
      allPendingOrder: [],
      defaultOrderDetail: [],
      totalPendingOrder: 0,
      currentViewDetail: 0,
      currentViewTable: 0,
    };
  }

  componentDidMount() {
    this.init();
    setInterval(() => this.reload(), 2000);
  }

  init = async () => {
    this.checkAuthentication();
    const staff = await this.getStaffInfo();
    let allPendingOrder = await this.getAllPendingOrder();
    let defaultOrderDetail = [];
    let totalPendingOrder = 0;
    if (allPendingOrder && allPendingOrder.length > 0) {
      defaultOrderDetail = await this.getOrderDetail(
        allPendingOrder[0].ORDER_ID
      );
      totalPendingOrder = allPendingOrder.length;
    }
    this.setState({
      staff,
      data: [],
      allPendingOrder,
      defaultOrderDetail,
      totalPendingOrder,
    });
  };

  reload = async () => {
    this.checkAuthentication();
    let totalPendingOrder = this.state.totalPendingOrder
    let newData = await this.getAllPendingOrder();
    if (newData.length > 0) {
      totalPendingOrder = newData.length;
    }
    this.setState({
      allPendingOrder: newData,
      totalPendingOrder,
    });
  };

  checkAuthentication = async () => {
    let token = localStorage.getItem("_token");
    if (token) {
      this.setState({
        isAuth: true,
      });
      return;
    } else{
      this.setState({
        isAuth: false,
      });
    }
  };

  logOut = () =>{
    localStorage.removeItem("_token");
    this.setState({
      isAuth: false,
    });
  };

  getStaffInfo = async () => {
    let token = localStorage.getItem("_token");
    const response = await axios.get(
      `http://localhost:8000/staff_login/${token}`
    );
    return response.data;
  };

  getAllPendingOrder = async () => {
    const response = await axios.get(`http://localhost:8000/staff_order`);
    const data = response.data;
    return data;
  };

  getOrderDetail = async (id) => {
    const response = await axios.get(`http://localhost:8000/staff_order/${id}`);
    return response.data;
  };

  showOrderDetail = async (orderId) => {
    const data = await this.getOrderDetail(orderId);
    const response = await axios.get(`http://localhost:8000/table/${orderId}`);
    this.setState({
      data,
      currentViewDetail: orderId,
      currentViewTable: response.data,
    });
  };

  getTableId = async (orderId) => {
    const response = await axios.get(`http://localhost:8000/table/${orderId}`);
    this.setState({
      currentViewTable: response.data,
    });
  };

  completedOrder = async (orderId) => {
    await axios.get(`http://localhost:8000/order_complete/${orderId}`);
    this.init();
  };

  render() {
    const {
      data,
      isAuth,
      allPendingOrder,
      staff,
      totalPendingOrder,
      currentViewDetail,
      currentViewTable,
    } = this.state;
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
                  <span className="header-text">Nhân viên</span>
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
            <div className="d-flex flex-column align-items-start justify-content-start w-100">
              <h5 className="mt-4 mb-3 px-4">
                  Đơn đặt món mới ({totalPendingOrder === 0 || totalPendingOrder === [] || totalPendingOrder === null ? 0 : totalPendingOrder})
              </h5>
              <div className="d-flex flex-row w-100 h-100">
                {/* STAFF MENU ORDER SIDE BAR */}
                <div className="w-25 d-flex flex-column align-items-start justify-content-start order-list px-4">
                  <ul className="d-flex w-100 list-group list-group-flush">
                    <li className="list-group-item d-flex flex-row align-items-center justify-content-center bg-dark w-100 border">
                      <h6 className="m-0 text-white">Đơn chờ xử lý</h6>
                    </li>
                    {allPendingOrder &&
                      allPendingOrder.length > 0 &&
                      allPendingOrder.map((order) => {
                        return (
                          <li
                            style={{ cursor: "pointer" }}
                            className={`list-group-item d-flex flex-row align-items-center justify-content-between w-100 border ${
                              currentViewDetail === order.ORDER_ID
                                ? "active-order"
                                : null
                            }`}
                            key={order.ORDER_ID}
                            onClick={() => this.showOrderDetail(order.ORDER_ID)}
                          >
                            <div className="d-flex flex-column align-items-start justify-content-center mr-4">
                              <span className="order-text">
                                Đơn số {order.ORDER_ID}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>

                {/* STAFF DETAIL ORDER */}
                {data.length > 0 ? (
                  <div className=" w-75 d-flex flex-column align-items-start justify-content-start mr-4 bg-main px-4 pb-5 bg-main">
                    <span className="pt-4">Đơn số {currentViewDetail}</span>
                    <span>Bàn {currentViewTable}</span>
                    <Table
                      className="w-100 pt-3"
                      dataSource={data}
                      columns={columns}
                      pagination={false}
                    />
                    <Button
                      onClick={() => this.completedOrder(currentViewDetail)}
                      type="primary"
                      className="d-flex align-self-end align-items-center px-4 py-3 mt-4"
                    >
                      HOÀN TẤT
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
