import React,{ Component } from 'react';

class Dialog extends Component {

    constructor(props) {
        super(props);

        this.handclick = this.handclick.bind(this);
    }

    handclick(){
        var len = this.props.nums;
        var newid = len > 0?len:0;
        var value = this.refs.mytext.value;
        if (value !== ''){
            var obj ={
                id:newid,
                name:value,
                status:0
            };
            this.refs.mytext.value = '';
            this.props.addNewTask(obj);
        }

    }

    render(){
        return(
            <div className="dialog">
                <div>
                    <h3>Task</h3>
                    <input type="text" ref="mytext" placeholder="新计划"/>
                </div>
                <div>
                    <input type="button" value="submit" onClick={this.handclick}/>
                </div>
            </div>
        );
    }

}

export default Dialog;