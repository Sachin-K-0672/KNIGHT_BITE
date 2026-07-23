import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
const Home = () => {
    let feature_img = [
        {
            url: "https://www.knight-bite.com/res/index/feature-1.svg",
            sub: "Late Night Delivery",
            sub2: "Till 4 am"
        },
        {
            url: '	https://www.knight-bite.com/res/index/feature-2.svg',
            sub: "Order on App Or",
            sub2: " Call 080-4710607"
        },
        {
            url: 'https://www.knight-bite.com/res/index/feature-3.svg',
            sub: "Delivery within 40",
            sub2: " mins"
        },
        {
            url: 'https://www.knight-bite.com/res/index/feature-4.svg',
            sub: "Food for every kind",
            sub2: " of hunger"

        },
        {
            url: 'https://www.knight-bite.com/res/index/feature-5.svg',
            sub: "Place Bulk orders",
            sub2: " through App"
        }

    ]



    return (
        <>
            <div className='home'>
                <h3>order late night meals</h3>

                <div className="app">
                    <div className="box">
                        <img src="https://nrzl4apc.knight-bite.com/main/res/index/ios-store.svg" alt="" />
                    </div>
                    <div className="box play">
                        <img src="/images/googleplay.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="features">
                <h1>Features</h1>

                <div className="sub-features">
                    {
                        feature_img.map((elem, index) => {
                            let { url, sub, sub2 } = elem

                            return (
                                <div className="box" key={index}>
                                    <div className="box-img">
                                        <img src={url} alt="" />
                                    </div>
                                    <div className="box-sub">
                                        {sub} <br />
                                        {sub2}
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>

            </div>

            <div className="section3">
                <h3>Enjoy food, enjoy life</h3>
            </div>

            <div className="section4">
                <div><h3>Burger, fries, shakes <br />and many more</h3></div>
                <button>See Full Menu</button>
            </div>

            <div className="section5">
                <h1>Connect with us</h1>

                <div className="contactus">
                    <div className="box">
                        <h2>Contact us</h2>

                        <div className='sub-sec'>
                            <div>
                                <div> <img src="https://nrzl4apc.knight-bite.com/main/res/index/mail_icon.svg" alt="" /></div>
                                <p>knightbiteixe@gmail.com</p>
                            </div>
                            <br />
                            <div>
                                <div><img src="	https://nrzl4apc.knight-bite.com/main/res/index/phone_icon.svg" alt="" /></div>
                                <p>+91 8047106107 <br />Available from 7pm to 4am</p>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <h2>Quick Links</h2>
                        <div className='sub-sec'>
                            <ul>
                                <li>Delivery Policies</li>
                                <li>Privacy Policies</li>
                                <li>Careers (Coming soon)</li>
                                <li>Franchise</li>
                            </ul>
                        </div>
                    </div>
                    <div className="box">
                        <p>Enter your email address below to be the first to know everything about <br /> us, where we’ll be next, and how you can come along! <br /> Join us on our adventure.</p>
                        <div className='sub-sec'>
                            <div className='email1'>
                                <input type="email" placeholder='Enter your email address' />
                                <button>
                                    <img src="https://nrzl4apc.knight-bite.com/main/res/index/email-btn.svg" alt="" />
                                </button>
                            </div>





                        </div>
                    </div>
                    <div className="box">
                        <h2>Head Office</h2>
                        <div className='sub-sec'><p>Mangaluru-575001</p></div>
                    </div>
                    <div className="box">
                        <h2>Locations</h2>
                        <div className="sub-sec">
                            <ul><li>Bengaluru, Mangalore,<br /> Manipal, Udupi</li></ul>
                        </div>
                    </div>
                    <div className="box">
                        <h2>Follow us</h2>
                        <div className="netapp">
                            <div><NavLink><img src="https://www.knight-bite.com/res/instagram.svg" alt="" /></NavLink></div>
                            <div><NavLink><img src="	https://www.knight-bite.com/res/facebook.svg" alt="" /></NavLink></div>
                            <div><NavLink><img src="https://www.knight-bite.com/res/twitter.svg" alt="" /></NavLink></div>
                            <div><NavLink><img src="https://www.knight-bite.com/res/linkedin.svg" alt="" /></NavLink></div>
                            <div><NavLink><img src="	https://www.knight-bite.com/res/youtube.svg" alt="" /></NavLink></div>
                        </div>





                    </div>
                </div>

                
            </div>

        <div className="last">
                    <div className="box">
                        <img src="	https://www.knight-bite.com/res/index/brand_logo-1_footer.svg" alt="" />
                    </div>
                    <div className="box">
                        <img src="	https://www.knight-bite.com/res/index/brand_logo-2_footer.svg" alt="" />
                    </div>
                </div>

                    <br /><br /><br />

        </>

    )
}

export default Home
