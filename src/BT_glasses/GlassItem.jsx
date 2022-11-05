import React, { Component } from 'react'

export default class GlassItem extends Component {
    render() {
        const {item, renderGlassItem} = this.props;
        return (
            <button className='item btn' onClick={() => {
                renderGlassItem(item)
            }}>
                <img className='w-100' src={item.url} alt="..." />
            </button>
        )
    }
}
