import React, { Component } from 'react';
import TabLi from './TabLi.js';
import TabContent from './TabContent.js';

export default class Container extends Component {

    render() {
        const { state, actions } = this.props;
        return (
            <div>
                <section>
                    <TabLi clickMethod={actions.fetchDataByList} active={state.active} list={state.list}/>
                </section>
                <section>
                    <TabContent start={state.active === 0} defaultValue={state.showOne.content}/>
                    <TabContent start={state.active === 1}  defaultValue={state.showTwo.content}/>
                    <TabContent start={state.active === 2}  defaultValue={state.showThree.content}/>
                </section>
            </div>
        );
    }
}