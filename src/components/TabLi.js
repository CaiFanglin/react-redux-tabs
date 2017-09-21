import React, { Component } from 'react';
import './TabLi.css';
import cls from 'classnames'

export default class TabLi extends Component {

    componentDidMount () {
        this.props.clickMethod({
            type: 0,
            content: '123'
        });
    }

    render() {
        const { list, clickMethod, active } = this.props;

        const changeContent = (e) => {
            e.preventDefault();
            let activeMenu = Number(e.target.parentNode.getAttribute('data-key'));
            clickMethod({
                type: activeMenu,
                content: '123'
            });
        }
        return (
            <ul className="ul">
            {
                list.map((item, index) => {
                    return (
                        <li key={index} data-key={index} className={cls('li', {'active': active === index})} onClick={changeContent}><a href="void(0)">{item}</a></li>
                    )
                })
            }
            </ul>
        );
    }
}