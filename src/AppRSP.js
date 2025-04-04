import React, { Component } from 'react'
import './App.css';
import Box from './component/Box';

//가위바위보 선택
const choice = {
    rock: {
        name: '주먹',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-WOCZo6ekK9IykrJPTMu3CaZVMvTtJwuqw&s"
    },
    scissors: {
        name: '가위',
        img:"https://cdn.imweb.me/thumbnail/20200515/f5f09c900eed0.png"
    },
    paper: {
        name: '보',
        img:"data:image/jpeg;base64,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"
    }
}


export default class AppRSP extends Component {
    constructor(props) {
        super(props);
        this.state = { //class 컴포넌트에서 state는 constructor에서 초기화
            userChoice: null,
            computerChoice1: null,
            result: ""
            //이 안에서 JOSN형식으로 값들을 적고 초기화 하면 됨
        };
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userChoice: choice[userChoice], 
            computerChoice1: choice[computerChoice],
            result: this.judgement(choice[userChoice], choice[computerChoice])
        });
    };

    randomChoice = () => {
        let itemArray = Object.keys(choice); //객체의 키값만 뽑아 배열로 만듬
    
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        // console.log(final);
    
        return final;
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return ["비겼습니다", "tie", "비겼습니다", "tie"];
        } else if ((user.name === "가위" && computer.name === "보") || (user.name === "주먹" && computer.name === "가위") ||(user.name === "보" && computer.name === "주먹")) {
            return ["이겼습니다", "win", "졌습니다", "lose"];
        } else {
            return ["졌습니다", "lose", "이겼습니다", "win"];
        }
    };

render() {
    return (
        <div>
            <div className="main"> 
                <Box item={this.state.userChoice} result={this.state.result[0]} whatisit={this.state.result[1]} />
                <Box title="컴퓨터" item={this.state.computerChoice1} result={this.state.result[2]} whatisit={this.state.result[3]} />
            </div>

            <div className="btn">
                {/*리액트 주의사항 함수는 콜백함수 형태로 하자*/}
                <img className="BBB S img-big" src="/download-removebg-preview.png" onClick={()=>this.play("scissors")}/>
                <img className="BBB R img-big" src="/download-removebg-preview.png" onClick={()=>this.play("rock")}/>
                <img className="BBB P img-big" src="/download-removebg-preview.png" onClick={()=>this.play("paper")}/>
            </div>
        </div>
        )
    }
}
