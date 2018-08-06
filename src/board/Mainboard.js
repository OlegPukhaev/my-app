import React, { Component } from 'react';
import '../../src/bootstrap.css';
import '../../src/style.css';
import Column from '../column/Column.js';

// Главная доска для заданий
class Mainboard extends React.Component {
    render () {
        return (
            <div class="container-fluid">
                <div class="row mt-1">
                    <Column colname="tab1" />    
                      
                </div>
            </div>
        );
    }
}

export default Mainboard;