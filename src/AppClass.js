import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = { //class 컴포넌트에서 state는 constructor에서 초기화
            count: 0,
            num: 0
            //이 안에서 JOSN형식으로 값들을 적고 초기화 하면 됨
        };
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1,
            num: this.state.num + 1
        }); //setState를 통해서 state를 변경
    }

    //난 class 컴포넌트 방식이 맘에 든다.

render() {
    return (
        <div>
            <h1>Class 컴포넌트</h1>
            <div>AppClass: {this.state.count}</div>
            <button onClick={this.increase}>증가</button>
            <BoxClass num={this.state.num}/>
        </div>
        )
    }
}
