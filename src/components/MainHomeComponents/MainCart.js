import React, { Component } from "react";
import { Button, Input } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export default class MainCart extends Component {
  onClickOrderBtn = () => {
      console.log('dat mon');
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-start justify-content-start main-cart h-100">
        <div className="d-flex w-100 bg-warning img-cart align-items-center justify-content-start p-2">
            <h1>Bàn 1</h1>
        </div>
        <div className="d-flex flex-row align-items-end justify-content-between px-3 py-2 bg-white w-100">
          <span>Đơn đặt món</span>
          <span className="total-dish">Tổng món: 2</span>
        </div>
        <div className="d-flex flex-column align-items-start justify-content-start w-100">
          <div className="d-flex flex-row align-items-center justify-content-between w-100 py-4 px-2 border-bottom">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column align-items-start pl-3">
                <span className="font-weight-bold dish-title">Lẩu cá</span>
                <Input placeholder="Note" bordered={false} className="p-0" />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <span className="pr-3 total-dish">150.000</span>
              <Button
                shape="circle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={<MinusOutlined />}
              />
              <span className="px-3">1</span>
              <Button
                type="primary"
                shape="circle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={<PlusOutlined />}
              />
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between w-100 py-4 px-2 border-bottom">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column align-items-start pl-3">
                <span className="font-weight-bold dish-title">Lẩu cá</span>
                <Input placeholder="Note" bordered={false} className="p-0" />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <span className="pr-3 total-dish">150.000</span>
              <Button
                shape="circle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={<MinusOutlined />}
              />
              <span className="px-3">1</span>
              <Button
                type="primary"
                shape="circle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={<PlusOutlined />}
              />
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between w-100 py-4 px-2 border-bottom">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column align-items-start pl-3">
                <span className="font-weight-bold dish-title">Lẩu cá</span>
                <Input placeholder="Note" bordered={false} className="p-0" />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <span className="pr-3 total-dish">150.000</span>
              <Button
                shape="circle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={<MinusOutlined />}
              />
              <span className="px-3">1</span>
              <Button
                type="primary"
                shape="circle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={<PlusOutlined />}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-row align-items-end mt-auto justify-content-between pl-3 pr-5 py-4 bg-white w-100">
          <span>Tổng cộng: 350.000 VND</span>
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
      </div>
    );
  }
}
