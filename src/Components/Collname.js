import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import { saveData } from './../functions/Functions';
import {showFormColname} from './../Actions/Actions'
import Changetitle from './Changetitle';

class Collname extends React.Component {
    constructor () {
        super()

        this.state = {activeID : null}
    }

    showFormColname = () => this.props.dispatch(showFormColname(this.props.tabid));

    render() {
        return (
            <div class="text-center">
                <h3 onClick={this.showFormColname}>{this.props.colname}</h3>
                {this.props.tab.formstate === this.props.tabid && <Changetitle id={this.props.tabid} colname={this.props.colname}/>}
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