import React, { Component } from 'react';

class ChartData extends Component {

    render() {
        return (
            <div className="container-fluid px-10">
                <div className="row minus-mx-20 mt-20">
                    <div className="col-md-5 col-12 px-10">
                        <div className="p-10 half-black-border border-radius-4 d-flex flex-wrap align-items-center h-100">
                            <div className="w-100">
                            <div className="row minus-mx-10 px-10 py-10">
                                <div className="col-md-6 col-12 img-text-wrapper px-10">
                                    <img src="../assets/img/use-case-graph.png" className="img-fluid" />
                                    <div className="txt-above-img">Run select use cases for</div>
                                </div>
                                <div className="col-md-6 col-12 px-10">
                                    <ul className="list-unstyled use-case-graph-list">
                                        <li>
                                            <button className="btn own-btn text-left btn-block blue-border-btn">Buy side PE</button>
                                        </li>
                                        <li>
                                            <button className="btn own-btn text-left btn-block blue-border-btn">Buy side Corporate</button>
                                        </li>
                                        <li>
                                            <button className="btn own-btn text-left btn-block blue-border-btn">Sell side</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-12 px-10">
                        <div className="whole-wrapper-inside half-black-border border-radius-4">
                            <div className="row px-10 py-10">
                                <div className="col-md-4 col-12 img-text-wrapper px-10">
                                    <img src="../assets/img/top-charts.png" className="img-fluid" />
                                    <div className="txt-above-img">Top charts</div>
                                </div>
                                <div className="col-md-8 col-12 px-10">
                                    <ul className="list-unstyled list-inline-item own-btn-list">
                                        <li className="list-inline-item">
                                            <button className="btn own-btn blue-border-btn">Acquirers</button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button className="btn own-btn blue-border-btn">Acquirers</button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button className="btn own-btn blue-border-btn">Acquirers</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChartData;