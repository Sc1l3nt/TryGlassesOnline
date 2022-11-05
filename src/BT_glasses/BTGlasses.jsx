import React, { Component } from 'react'
import './BTGlasses.scss'
import GlassItem from './GlassItem'

const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class BTGlasses extends Component {
    state = {
        display: 'd-none',
        item: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    renderListTiem = () => {
        return data.map((item) => {
            return <div key={item.id} className='col col-lg-2 col-md-4 col-sm-4 col-6 p-2'>
                <GlassItem item={item} renderGlassItem={this.renderGlassItem}/>
            </div>
        })
    }

    renderGlassItem = (item) => {
        this.setState({
            display: '',
            item: item
        })
    }

    render() {
        const display = this.state.display;
        const {name, desc, url} = this.state.item;
        return (
            <div className='main pb-3'>
                <div className='title'>
                    <h3 className='text-center text-light p-5'>TRY GLASSES APP ONLINE</h3>
                </div>
                <div className='product container'>
                    <div className='model-img d-lg-flex d-block justify-content-around my-5'>
                        <div className='img d-lg-block d-none'>
                            <img src="./glassesImage/model.jpg" alt="..." />
                            <div className='glass'>
                                <img src="./glassesImage/v7.png" alt="" />
                                <div className='info p-1'>
                                    <h4 className='text-primary'>FENDI F8750</h4>
                                    <p className='text-light'>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                </div>
                            </div>
                        </div>
                        <div className='img'>
                            <img src="./glassesImage/model.jpg" alt="..." />
                            <div className={`glass ${display}`}>
                                <img src={url} alt="" />
                                <div className='info p-1'>
                                    <h4 className='text-primary'>{name}</h4>
                                    <p className='text-light'>{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='list-item mb-3'>
                        <div className='row'>
                            {this.renderListTiem()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
