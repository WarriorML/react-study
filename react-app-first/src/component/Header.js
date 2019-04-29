import React, { Component } from 'react';
import '../index.css';

class Header extends Component {
    render() {
        const title = 'React 小书';
        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}

export default Header;