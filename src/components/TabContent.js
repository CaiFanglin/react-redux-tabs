import React, { Component } from 'react';
import './TabContent.css';

export default class TabContent extends Component {


    render() {
        const { start, defaultValue } = this.props;
        let value = '';
        if (typeof defaultValue === 'object') {
            value = defaultValue.name;
        } else {
            value = defaultValue;
        }
        if (start) {
            if (defaultValue.list && defaultValue.list.length) {
                let list = defaultValue.list;
                return (
                    <section className="tabContent">
                    {
                        list.map((item,index) => {
                            return (
                                <a key={index} className="c-blocka">
                                    <p className="c-line-clamp2">
                                        <span>{item.name}:&nbsp;</span>
                                        <span>{item.desc}</span>
                                    </p>
                                </a>
                            )
                        })
                    }
                   </section>
                )
            } else {
                return (
                    <p className="tabContent">
                        {
                            value
                        }
                    </p>
                );
            }
        } else {
            return <p></p>;
        }

    }
}