import React, { Fragment, useEffect, useState } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar'
import { connect } from "react-redux";
import api from "../../api";
import Footer from '../../components/footer';
import Logo from '../../images/logo2.png'
import Rooms from './rooms';
import RoomDetails from './RoomDetails';
import Newslatter from '../../components/Newslatter/Newslatter';


const RoomSinglePage = (props) => {
    const { id } = useParams()


    const productsArray = api();
    const Allproduct = productsArray

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.id === Number(id)))
    }, []);

    const item = product[0];

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            {/* <PageTitle pageTitle={item ? item.title : null} pagesub={'Room'} /> */}
            <div className="wpo-hotel-details-section p-3">
                            <div className="container">
                                <div className="row">
                                <h2>Chic 1 BHK in Downtown Dubai near to metro station</h2>    
                                        </div>      
                                        </div>      
                                        </div>      
            <div className="room-details-section">
                
                {item ?
                    <div className="room-details-inner">
                        
                        <Rooms item={item}/>
                        <div className="wpo-hotel-details-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="wpo-hotel-details-wrap">
                                            
                                            <div className="wpo-hotel-details-area">
                                                <form className="clearfix">
                                                    <div className="details-sub">
                                                        <span>GUESTS</span>
                                                        <h2>4</h2>
                                                    </div>
                                                    <div className="details-sub">
                                                        <span>BEDROOM</span>
                                                        <h2>1</h2>
                                                    </div>
                                                    <div className="details-sub">
                                                        <span>BED</span>
                                                        <h2>1</h2>
                                                        {/* <h2>{item.capacity} adults ({item.Children} children)</h2> */}
                                                    </div>
                                                    <div className="details-sub">
                                                        <span>BATHROOMS</span>
                                                        <h2>2</h2>
                                                    </div>
                                                    <div className="details-sub">
                                                        <h5>Price <span>${item.price}</span> / Night</h5>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RoomDetails/>
                    </div>
                : null}
            </div>
            {/* <Newslatter nClass={'section-bg'}/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps)(RoomSinglePage);
