import React, { Component } from 'react';
import { smartFilters } from './hardcodeJson';
import Slider from "react-slick";

class FilterSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
            currentData:[],
            btnType:null,
        }
    }
    componentDidMount = ()=>{
     this.arrayData() ;
    }

    arrayData =()=>{
        let newArray = []
        smartFilters[this.state.currentIndex].data.forEach(x=>{

            if(x.type==='strategic'){
                x.btn='green-btn';
                x.btnTxt = 'Strategic gaps'
            }
            else if(x.type==='potential'){
                x.btn='salmon-btn';
                x.btnTxt = 'Potential acqurers'
            }
            else if(x.type==='comparables'){
                x.btn='orange-btn';
                x.btnTxt = 'Comparables'
            }
            else if(x.type==='profile'){
                x.btn='pink-btn';
                x.btnTxt = 'Profile'
            }
            else if(x.type==='fast'){
                x.btn='blue-btn';
                x.btnTxt = 'Fast path'
            }

            if(this.state.btnType){
                if(x.type===this.state.btnType){
                    newArray.push(x)
                }

            }
            else{
                newArray.push(x) 
            }
            
        })
        this.setState({
            currentData:newArray
        },()=>{
           this.sliderInit() 
        })
    }

    sliderInit =()=>{
    //     window.$('.slider-wrapper-list').slick({
    // infinite: true,
    // slidesToShow: 6,
    // slidesToScroll: 6
    //     });
    }

    btnFilter =(value)=>{
        this.setState({
            btnType:value  
        },()=>{
            this.arrayData()
        })
    }

    
    filterMain = (index) => {
        this.setState({
            currentIndex: index,
            btnType:null,

        },()=>{
            this.arrayData() 
        })
    }

    render() {
        return (
            <div className="container-fluid px-20 text-left">
                <div className="row minus-mx-20 mt-20">
                    <div className="col-md-12 p-20 half-black-bg px-20">
                        <h2 className="own-main-heading">
                            Choose from our smart filters
                        </h2>
                        <p className="own-txt color-off-white-6">Lorem ipsum dolor sit amet, consectetur</p>
                        <ul className="list-unstyled list-inline own-filter-list">
                            {smartFilters.length>0 && smartFilters.map((filter, index)=>(
                                <li key={index}
                                onClick={()=>this.filterMain(index)}
                                className={this.state.currentIndex==index?"list-inline-item cursor active pt-1":"list-inline-item cursor pt-1"}><span>{filter.name}</span></li>
                            ))}
                           
                        </ul>
                        <ul className="list-unstyled list-inline btn-list">
                            <li className="list-inline-item active">
                                <button onClick={()=>this.btnFilter('profile')} className="btn own-btn pink-btn btn-sm-round">Profile</button>
                            </li>
                            <li className="list-inline-item "><button onClick={()=>this.btnFilter('comparables')} className="btn own-btn orange-btn btn-sm-round">Comparables</button></li>
                            <li className="list-inline-item "><button onClick={()=>this.btnFilter('strategic')} className="btn own-btn green-btn btn-sm-round">Strategic gaps</button></li>
                            <li className="list-inline-item "><button onClick={()=>this.btnFilter('potential')} className="btn own-btn salmon-btn btn-sm-round">Potential acqurers</button></li>
                            <li className="list-inline-item "><button onClick={()=>this.btnFilter('fast')} className="btn own-btn blue-btn btn-sm-round">Fast path</button></li>
                        </ul>
                        <div className="slider-wrapper">
                            <ul className="row list-unstyled slider-wrapper-list">
                                {this.state.currentData.map((data,index)=>(
                                    <li className="col-md-6 col-12 px-2" key={index}>
                                    <div className="list-inner-wrapper border-radius-4"><span>{data.text}</span>
                                        <button className={`btn own-btn ${data.btn} btn-xs-round`}>{data.btnTxt}</button>
                                    </div>
                                </li>
                                ))}
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterSection;