import React, { Component } from 'react';

class Header extends Component {

    componentDidMount=()=>{
        this.headerHeight();
    }

    headerHeight = ()=>{
        window.$(window).resize(function(){
        let headerHeightNew = window.$('.fixed-header-wrapper').outerHeight('true');
        window.$('.own-header').css({'min-height':headerHeightNew[0].clientHeight})
        });
        let headerHeightNew = window.$('.fixed-header-wrapper').outerHeight('true');
        window.$('.own-header').css({'min-height':headerHeightNew[0].clientHeight})
    }

    render() {
        return (
            <header className="own-header">
                <div className="fixed-header-wrapper py-3">
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-md-4 col-12">
                                <div className="header-logo">
                                    clientLogo
                                    {/* <img src="../assets/img/logo.png" className="img-fluid" alt="logo" /> */}
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <form>
                                    <div className="form-group header-form-group position-relative mb-0">
                                        <input type="text" className="form-control" placeholder="Search for companies, people & investors" />
                                        <div className="input-img-wrapper">
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 col-12 text-right profile-details-wrapper">
                                <div className="header-my-profile-wrapper text-left cursor">
                                    <div className="my-profile-inner d-flex flex-wrap align-items-center">
                                        <div className="header-my-img">
                                            <img src="http://exercisebliss.com/wp-content/themes/bliss-blank3/img/profile-square.jpg" alt="profile-img" />
                                        </div>
                                        <div className="header-my-name">
                                            Mrinalini Saha
                                        </div>
                                        <img src="../assets/img/angle-down.png" className="my-profile-dropdown-icon" alt="icon" />
                                    </div>
                                    {/* <div class="my-profile-dropdown-wrapper">
                       <ul class="my-profile-dropdown-list list-unstyled">
                           <li>Logout</li>								
                       </ul>
                       </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header