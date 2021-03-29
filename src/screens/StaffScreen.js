import React, { Component } from 'react';
import { Divider, Button, Tabs, Table } from 'antd';
import '../styles/staff-screen.css';
import {numFormat} from '../utils';

const {TabPane} = Tabs;

const columns = [
    {
        title: "Tên món",
        dataIndex: 'DISH_NAME',
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
            userName: this.props.match.params.id,
            isModalVisible: false,
            data: []
        }
    }

    logOut = () => {
        console.log('log out');
    }

    render() {
        const { data } =this.state;
        return(
            <div className="d-flex flex-column align-items-start justify-content-start w-100">

                {/* STAFF HEADER BAR */}    
                <div className="d-flex flex-row align-items-center justify-content-between w-100 px-3 py-4 border-bottom header-shadow">
                    <div className="d-flex flex-row align-items-center justify-content-start w-75">
                        <h3 className="m-0">FOOD ORDER</h3>
                        <Divider type="vertical" className="" />
                        <div className="d-flex flex-column align-items-start justify-content-center px-3">
                            <span className="header-text">Xin chào staff1 - Nguyễn Thuý Hằng</span>
                            <span className="header-text">Nhân viên nhà bếp</span>
                        </div>
                    </div>
                    <Button onClick={this.logOut} type="primary" shape='round' className="btn-shadow d-flex align-items-center mr-5 px-4 py-3">Đăng xuất</Button>
                </div>
                <h5 className="mt-4 mb-3 px-4">Đơn đặt món mới (10)</h5>
                <div className="d-flex flex-row w-100 h-100">
                    {/* STAFF MENU ORDER SIDE BAR */}
                    <div className="w-25 d-flex flex-column align-items-start justify-content-start order-list px-4">
                        <ul className="d-flex w-100 list-group list-group-flush">
                            <li className="list-group-item d-flex flex-row align-items-center justify-content-center bg-dark w-100 border">
                                <h6 className="m-0 text-white">Đơn chờ xử lý</h6>
                            </li>
                            <li className="list-group-item d-flex flex-row align-items-center justify-content-between w-100 border active-order">
                                <div className="d-flex flex-column align-items-start justify-content-center mr-4">
                                    <span className="order-text">Đơn số 5</span>
                                    <span className="order-text">Tổng món: 10</span>
                                </div>
                                <span className="order-text d-flex time-text">12:00</span>
                            </li>
                            <li className="list-group-item d-flex flex-row align-items-center justify-content-between w-100 border-bottom border-left border-right">
                                <div className="d-flex flex-column align-items-start justify-content-center mr-4">
                                    <span className="order-text">Đơn số 5</span>
                                    <span className="order-text">Tổng món: 10</span>
                                    <span className="d-flex remind-text">Đơn quá 30 phút chưa hoàn tất</span>
                                </div>
                                <span className="order-text d-flex time-text-late">12:00</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* STAFF DETAIL ORDER */}
                    <div className=" w-75 d-flex flex-column align-items-start justify-content-start h-100 pr-4">
                        <span>Đơn số 5</span>
                        <span>Bàn 6</span>
                        <span>Giờ đặt: 12:00</span>
                        <Table 
                            className="w-100 pt-3"
                            dataSource={data}
                            columns = {columns}
                            pagination={false}
                        />
                        <Button onClick={this.completedOrder} className="d-flex align-self-end align-items-center px-4 py-3 mt-4 btn-complete">HOÀN TẤT</Button>
                    </div>
                </div>
            </div>
        );
    }
}