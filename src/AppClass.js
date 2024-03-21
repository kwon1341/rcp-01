import React, {Component,} from "react"
import BoxClass from "./component/BoxClass";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검은색)
const choice ={
    rock:{
        name:"Rock",
        img:"images/rock.jpg",
        describe:"Rock",
    },
    scissors:{
        name: "Scissors",
        img:"images/scissors.jpg",
        describe:"Scissors",
    },
    paper:{
        name:"Paper",
        img:"images/paper.jpg",
        describe:"Paper",
    },
}
export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
        }
    }

    play=(userChoice)=>{
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect : choice[userChoice],
            computerSelect : computerChoice,
            result : this.judgement(choice[userChoice], computerChoice),
        })
    };

    judgement = (user, computer) => {
        // console.log("user", user, "computer", computer);

        // user == computer tie
        // if user == rock, computer == "scissors" user win
        // if user == rock, computer == "paper" user lose
        // rock, scissors, paper 각각 경우의 수 생각하기

        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "Rock")
            return computer.name === "Scissors" ? "win" : "lose";
        else if (user.name === "Scissors")
            return computer.name === "Paper" ? "win" : "lose";
        else if (user.name === "Paper")
            return computer.name === "Rock" ? "win" : "lose";
    };

    randomChoice=()=>{
        let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
        // console.log("item array", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        // console.log("random value", randomItem);
        let final = itemArray[randomItem];
        // console.log("final", final);
        return choice[final];
    }
    render() {
        return (
            <div>
                <h1 className={"className"}>class component</h1>
                <div className="main">
                    <BoxClass
                        title="You"
                        item={this.state.userSelect}
                        result={this.state.result}
                    />
                    <BoxClass
                        title="Computer"
                        item={this.state.computerSelect}
                        result={this.state.result}/>
                </div>
                <div className="main">
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
            </div>
        );
    }


}
