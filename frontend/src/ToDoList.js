import React, { Component } from 'react';
import ListItem from './ListItem.js';
import Dialog from './dialog';
import main from './main.css';
//import axios from 'axios';

// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/json';
const server = 'http://localhost:8000';



class ToDoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            list:[
                {id: 0,name: '学英语',status: 0},
                {id: 1,name: '玩游戏',status: 0},
                {id: 2,name: '聊天',status: 0}
            ],
            finished: 0
        };
    }

    addTask(newItem) {
        var allTask = this.state.list;
        allTask.push(newItem);
        this.setState ({
            list:allTask
        });
    }

    handlefinished(todoItem){
        var sum = 0;
        //var obj = []
        this.state.list.forEach(
            (item)=>{
                if (item.id === todoItem.id){
                    item.status = todoItem.status;
                }
                if (item.status === 1){
                    sum += 1;
                }
            }
        )
        this.setState ({
            finished: sum
        });
    }

    handleUpdate_Total(todoItem) {
        var obj = [];
        var sum = 0;

        this.state.list.forEach((item)=>{
            if (item.id !== todoItem.id) {
                obj.push(item);      //若是相同，则不会压入栈中
                if (item.status === 1){    //判断其中完成的数量
                    sum++;
                }
            }
        });

        this.setState ({
            finished: sum,
            list: obj
        });

    }

    render () {
        return (
            <div className="container">
                <h1>ToDoList</h1>
                <h2>todolist</h2>
                <ul>
                    {this.state.list.map((item,index) =>
                        <ListItem
                            item = {item}
                            todofinished = {this.handlefinished.bind(this)}
                            todoTotal = {this.handleUpdate_Total.bind(this)}
                            key ={index}
                        />)
                    }
                    <li>{this.state.finished}已完成&nbsp;&nbsp;/ {this.state.list.length}总数</li>

                </ul>
                <Dialog addNewTask = {this.addTask.bind(this)} nums = {this.state.list.length}/>

            </div>
        );
    }


}

export default ToDoList;