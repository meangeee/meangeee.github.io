/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '강남 맛집 추천', '리액트 강의 추천']);
  let [modal, setModal] = useState(false);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '16px' }}>
          ReactBlog
        </h4>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '남자 코트 추천';
        글제목변경(copy);
      }}>글 수정</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>


      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); }}>
                {글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}>👍 </span>{따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>글 삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />

      <button onClick={() => {
        let copy = [...글제목];
        copy.push(입력값);
        글제목변경(copy);
      }}>입력</button>
      <Modal2 />
      {
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} /> : null
      }
    </div >
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render() {
    return (
      <div>안녕 {this.state.age}
        <button onClick={() => {
          this.setState({ age: 21 })
        }}>수정</button>
      </div>
    )
  }
}

export default App;
