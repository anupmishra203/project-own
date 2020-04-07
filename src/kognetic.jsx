import React, { Component } from 'react';
import Header from './header';
import FilterSection from './filterSection';
import RightFilter from './rightFilter';
import Sectors from './sectors';
import ChartData from './chartsSections'
class Kognetics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
        }
    }

    handle = (index) => {
        this.setState({
            currentIndex: index,
        })
    }

    render() {
        return (
            <section className="full-body-wrapper full-black-bg color-white">
                <Header />

                <section>
                    <div className="container px-20 pb-20">
                        <div className="row minus-mx-20 px-1">
                        <div className="col-lg-9 px-10">
                            <FilterSection/>
                            <ChartData/>
                            <Sectors/>
                        </div>
                        <div className="col-lg-3 side-filter px-10 mt-20">
                            <RightFilter/>
                           
                        </div>
                        </div>
                    </div>
                </section>

                
            </section>
        )
    }
}

export default Kognetics;