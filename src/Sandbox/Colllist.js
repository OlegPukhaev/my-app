import React, { Component } from 'react';
import './App.css';
import Content from './Content';

class Colllist extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Content table="tab1"/>
                <Content table="tab2"/> 
                <Content table="tab3"/> 
                <Content table="tab4"/> 
            </div>
        );
    }
}

export default Colllist;