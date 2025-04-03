import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import api from "../../api";
import blogs from '../../api/blogs'


const RoomSidebar = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const productsArray = api();

    const products = productsArray

    return (
        <div className="col-lg-4 col-12" >
            <div className="blog-sidebar room-sidebar">
                <div className="widget check-widget" style={{backgroundColor:'#e1ce6c'}}>
                    <h3>Check Availability</h3>
                    <form onSubmit={SubmitHandler}>
                        <div className="input-group date">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            <i className="fi flaticon-calendar"></i>
                        </div>

                        <div className="input-group date">
                            <DatePicker selected={endDate} onChange={(date) => setendDate(date)} />
                            <i className="fi flaticon-calendar"></i>
                        </div>

                        <div className="input-group date">
                            <select name="Adults" id="Adults">
                                <option value="">Adults</option>
                                <option value="">2</option>
                                <option value="">5</option>
                                <option value="">1</option>
                            </select>
                        </div>
                        <div className="input-group date">
                            <select name="Children" id="Children">
                                <option value="">Children</option>
                                <option value="">2</option>
                                <option value="">5</option>
                                <option value="">1</option>
                            </select>
                        </div>
                        <div className="input-group date">
                            <Link to="/search-result" onClick={ClickHandler} className="theme-btn" type="submit">Booking Room</Link>
                        </div>
                    </form>
                </div>
                {/* <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Discover Our Rooms</h3>
                    </div>
                    <ul className="d-flex">
                        {products.length > 0 &&
                            products.slice(0, 6).map((product, pitem) => (
                                <li key={pitem}>
                                    <Link onClick={ClickHandler} to={`/room-single/${product.id}`}><img src={product.proImg}
                                    alt="" /></Link>
                                </li>
                            ))}
                    </ul>
                </div>
                {/* <div className="map-area">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352341.87716351956!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1743676915886!5m2!1sen!2sin"></iframe>
                            </div> */}
                {/* <div className="wpo-contact-widget widget">
                    <h2>How We Can <br /> Help You!</h2>
                    <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                        viverra maecenas accumsan lacus vel facilisis. </p>
                    <a href="contact.html">Contact Us</a>
                </div> */}
            </div>
        </div>

    )
}

export default connect(null)(RoomSidebar);