import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Modal, Input } from "antd";
export default class WelcomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      redirect: false,
      error: ''
    };
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false, redirect: true });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  onChooseTable = (e) => {
    let value = e.target.value;
    if(isNaN(value)){
        this.setState({ error: "Số bàn không hợp lệ, vui lòng nhập chữ số từ 1 đến 10"})
        return
    } else if(value >= 11){
        this.setState({error: "Vui lòng nhập đúng số bàn"})
        return
    }
    this.setState({ table: e.target.value, error: ''})
  };

  render() {
    const { isModalVisible, redirect, error, table } = this.state;
    return (
      <>
        {redirect ? (
          <Redirect push to={`/table/${table}`} />
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center welcome-content">
            <div className="text-center text-white pb-4">
              <h4>Lorem Ipsum</h4>
              <h6>
                Lorem Ipsum lorem just Lorem Ipsum lorem just Lorem Ipsum lorem
                just
              </h6>
            </div>
            <button className="btn btn-lg btn-order" onClick={this.showModal}>
              <span>Bắt đầu đặt món</span>
            </button>
            <Modal
              title="Số bàn bạn đang ngồi"
              visible={isModalVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Input
                placeholder="Nhập số bàn"
                bordered={false}
                style={{ fontSize: "20px" }}
                onChange={this.onChooseTable}
              />
              <span style={{ color: "red"}}>{error}</span>
            </Modal>
          </div>
        )}
      </>
    );
  }
}
