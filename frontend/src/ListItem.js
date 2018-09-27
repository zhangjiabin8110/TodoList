import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.updateChanged = this.updateChanged.bind(this);
        this.updateDelete = this.updateDelete.bind(this);
    }

    updateChanged(){
        var status = this.props.item.status;

        status = (status===0 ? 1:0);
        var obj = {
            id: this.props.item.id,
            name:this.props.item.name,
            status:status
        }

        this.props.todofinished(obj);

    }
    updateDelete(){
        this.props.todoTotal(this.props.item);
    }

    render() {
        const item = this.props.item;

        const unfinished = {
            color: '#ffffff',
            backgroundColor: '#00ff99',
        }
        const finished = {
            color: '#ffffff',
            backgroundColor:'#ff3300',
            textDecoration:'line-through'
        }

        var itemStyle = (item.status === 0?unfinished:finished);
        return(
            <li key={item.id} style={itemStyle}>
                <span
                    onClick={this.updateChanged}
                    className="check-btn"
                    id={item.id}
                    style={{backgroundColor: item.status===0? '#ffffff':'#000000'}}

                ></span>

                <span>{ item.name }</span>
                <span onClick={this.updateDelete} className="delete-btn">删除</span>

            </li>
        );
    }

}

export default ListItem;