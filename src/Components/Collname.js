import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { saveData } from './../functions/Functions';
import {showFormColname} from './../Actions/Actions'
import Changetitle from './Changetitle';

class Collname extends React.Component {
    constructor () {
        super()

        this.state = {activeID : null}

        // this.data = this.props.data
    }

    showFormColname = () => this.props.dispatch(showFormColname(this.props.id));

    render() {
        return (
            <div class="text-center">
                <h3 onClick={this.showFormColname}>{this.props.colname}</h3>
                {this.props.tab.formstate === this.props.id && <Changetitle id={this.props.id} colname={this.props.colname}/>}
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        tab: state.tab
    }
}

export default connect(mapStateToProps)(Collname);