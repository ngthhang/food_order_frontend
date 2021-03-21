import React, { Component} from 'react';

export default class WelcomeContent extends Component {
    render() {
        return (
            <div className='d-flex flex-column align-items-center justify-content-center welcome-content'>
                <div className='text-center text-white pb-4'>
                    <h4>Lorem Ipsum</h4> 
                    <h6>Lorem Ipsum lorem just Lorem Ipsum lorem just Lorem Ipsum lorem just</h6>
                </div>
                <button className='btn btn-lg btn-order'>Bắt đầu đặt món</button>
            </div>
        )
    }
}