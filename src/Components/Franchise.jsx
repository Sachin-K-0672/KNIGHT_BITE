import React from 'react'

const Franchise = () => {
  return (
    <>
      <div className="franchise">
        <div className="section1">
          <video src="/images/knightvideo.mp4" autoPlay muted loop />

        </div>

        <div className="content">
          <h2>Franchise with Knight Bite</h2>
          <p>Get Started with the modern way of doing business</p>

          <button>
            APPLY NOW
          </button>
<br />
           <button id='watch'>
           🎥 Watch VIDEO
          </button>
        </div>

        <div className="section2">
          <div className="mission">
            <h2>Mission and Vision</h2>
            <p>Our Mission is to deliver the best food with the <br />ultimate customer service.</p>
            <p>Our Vision is to be the most favourite food chain brand in the <br />country and world.</p>
          </div>

          <div className="line">
          </div>

          <div className="keybenefits">
            <h2>Key Benefits Of Knight Bite Franchise</h2>
          </div>

          <div className="sub_keybenefits">
            <div className="sub">
              <img src="	https://www.knight-bite.com/res/franchise/1.svg" alt="" />
              <h3>LOW INVESTMENT</h3>
              <p>No need of prime roadside location, interior decor. A office desk and any well hygenic kitchen space is enough.</p>
            </div>
            <div className="sub">
              <img src="	https://www.knight-bite.com/res/franchise/2.svg" alt="" />
              <h3>LOW MAINTAINANCE</h3>
              <p>The hygiene, rent, staff and storage is the only maintenance the franchise would have to focus on.</p>
            </div>
            <div className="sub">
              <img src="	https://www.knight-bite.com/res/franchise/3.svg" alt="" />
              <h3>BASIC SKILLSET</h3>
              <p>Anyone with basic training can step into the shoes of the staff. No serious training is required. Materials are sent.</p>
            </div>
            <div className="sub">
              <img src="	https://www.knight-bite.com/res/franchise/4.svg" alt="" />
              <h3>IN-HOUSE POS</h3>
              <p>POS will be provided to manage and track orders with ease. All the applications are interconnected to the POS. Moreover call centre customer support will also be provided.</p>
            </div>
            <div className="sub">
              <img src="	https://www.knight-bite.com/res/franchise/5.svg" alt="" />
              <h3>GOOD PROFIT MARGIN</h3>
              <p>Establishment running cost is much lesser than traditional restaurant. You are in for a good profit margin.

              </p>
            </div>

          </div>

          <div className="line">
          </div>
        </div>

        <div className="section-3">
          <div className="apply">
            <h2>Apply Here</h2>
            <p style={{ textAlign: "center" }}>Request for initial meeting</p>
          </div>

          <div className="apply-here">
            <div className="puzzel-img">

            </div>
            <div className="form">
              <form action="">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Second Name' />
                <input type="tel" placeholder='Contact Number' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Target Market (Indian State City)' />
                <input type="text" placeholder='No. of outlets planned' />
                <input type="text" placeholder='Message' />
                <div className="checkbox">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">
                    Request a brochure for the interested market
                  </label>
                </div>

                <button>SEND REQUEST</button>
                <br />
              </form>
            </div>
          </div>


        </div>

        <br /><br /><br />

        <div className="line">
          
          </div>

      <div className="franchise-queries">
            <h2>Franchise Queries</h2>
          </div>


    <div className="contact">
  <div className="item">
    <img src="https://www.knight-bite.com/res/franchise/footer-1.svg" alt="" />
    <p>Franchise Brochure</p>
  </div>

  <div className="item">
    <img src="https://www.knight-bite.com/res/franchise/footer-3.svg" alt="" />
    <p> 08047192034</p>
  </div>

  <div className="item">
    <img src="https://www.knight-bite.com/res/franchise/footer-2.svg" alt="" />
    <p>franchise@knight-bite.com</p>
  </div>
</div>

<br />
      </div>

    
    </>
  )
}

export default Franchise
