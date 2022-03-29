<div className="app__wrapper">
        {/* address */}
        <div className="app__wrapper_info-30 app__contact-card" 
        style={{height: 550, }}>
          <div className="app__wrapper">
            <div className="app__wrapper_info">
              <LocationOnIcon
                style={{ padding: 10, fontSize: 50 }}
                className="app__contact-icon"
              />
            </div>
            <div className="app__contact-address">
              <h3 className="app__head-subtitle">Location : </h3>
              <p className="app__p-text" style={{ fontSize: 16 }}>
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </div>
          <div className="app__wrapper">
            <div className="app__wrapper_info">
              <EmailIcon
                style={{ padding: 10, fontSize: 50 }}
                className="app__contact-icon"
              />
            </div>
            <div className="app__contact-address">
              <h3 className="app__head-subtitle">Email : </h3>
              <p className="app__p-text" style={{ fontSize: 16 }}>
                info@example.com
              </p>
            </div>
          </div>
          <div className="app__wrapper">
            <div className="app__wrapper_info">
              <PhoneIphoneIcon
                style={{ padding: 10, fontSize: 50 }}
                className="app__contact-icon"
              />
            </div>
            <div className="app__contact-address">
              <h3 className="app__head-subtitle">Call : </h3>
              <p className="app__p-text" style={{ fontSize: 16 }}>
                09123456789
              </p>
            </div>
          </div>
          <br />
          <div className="app__wrapper">
            <img src={image.address} alt="" style={{ width: "100%" }} />
          </div>
        </div>

        {/* email */}
        <div className="app__wrapper_info-70 app__contact-card" style={{justifyContent: 'flex-start', height: 550}}>
          <div className="app__wrapper" style={{ width: "100%" }}>
            <div className="app__wrapper_info">
              <p className="app__contact-email-text">Your Name : </p>
              <input
                className="app__contact-input"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="app__wrapper_info" style={{ paddingRight: 0 }}>
              <p className="app__contact-email-text">Your Email : </p>
              <input
                className="app__contact-input"
                type="text"
                placeholder="Your Email"
              />
            </div>
          </div>
          <br />

          <div className="" style={{ width: "100%", textAlign: "left" }}>
            <p className="app__contact-email-text">Subject : </p>
            <input
              className="app__contact-input"
              type="text"
              placeholder="Subject"
            />
            <br />
          </div>
          <br />

          <div className="" style={{ width: "100%", textAlign: "left" }}>
            <p className="app__contact-email-text">Message : </p>
            <textarea
              rows="10"
              cols="50"
              className="app__contact-input"
            ></textarea>
            <br />
          </div>
          <br /><br /><br />

          <div style={{width: '100%'}}>
            <button className="app__button" style={{ borderRadius: 5, margin: 'auto' }}>
              Send Message
            </button>
          </div>
        </div>
      </div>










    //   grid 
    <Grid container spacing={4} justifyContent="center" alignItems="center" style={{margin: 'auto'}}>
        <Grid item md={4} sm={10}  className="app__contact-card">
          <Grid container spacing={4}>
            <Grid item md={2}>
              <div className="app__wrapper_info">
                <LocationOnIcon
                  style={{ padding: 10, fontSize: 50 }}
                  className="app__contact-icon"
                />
              </div>
            </Grid>
            <Grid item md={9}>
              <div className="app__contact-address">
                <h3 className="app__head-subtitle">Location : </h3>
                <p className="app__p-text" style={{ fontSize: 16 }}>
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item md={2}>
              <div className="app__wrapper_info">
                <EmailIcon
                  style={{ padding: 10, fontSize: 50 }}
                  className="app__contact-icon"
                />
              </div>
            </Grid>
            <Grid item md={9}>
              <div className="app__contact-address">
                <h3 className="app__head-subtitle">Email : </h3>
                <p className="app__p-text" style={{ fontSize: 16 }}>
                  info@example.com
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item md={2}>
              <div className="app__wrapper_info">
                <PhoneIphoneIcon
                  style={{ padding: 10, fontSize: 50 }}
                  className="app__contact-icon"
                />
              </div>
            </Grid>
            <Grid item md={9}>
              <div className="app__contact-address">
                <h3 className="app__head-subtitle">Call : </h3>
                <p className="app__p-text" style={{ fontSize: 16 }}>
                  09123456789
                </p>
              </div>
            </Grid>
          </Grid>
            <br />
          {/* <div className="app__wrapper">
            <img src={image.address} alt="" style={{ width: "100%" }} />
          </div> */}
        </Grid>

        {/* sx={{md: {marginLeft: 20}}} */}
        <Grid item md={7} sm={10} className="app__contact-card">
          <div className="app__wrapper" style={{ width: "100%" }}>
            <div className="app__wrapper_info">
              <p className="app__contact-email-text">Your Name : </p>
              <input
                className="app__contact-input"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="app__wrapper_info" style={{ paddingRight: 0 }}>
              <p className="app__contact-email-text">Your Email : </p>
              <input
                className="app__contact-input"
                type="text"
                placeholder="Your Email"
              />
            </div>
          </div>
          <br />

          <div className="" style={{ width: "100%", textAlign: "left" }}>
            <p className="app__contact-email-text">Subject : </p>
            <input
              className="app__contact-input"
              type="text"
              placeholder="Subject"
            />
            <br />
          </div>
          <br />

          <div className="" style={{ width: "100%", textAlign: "left" }}>
            <p className="app__contact-email-text">Message : </p>
            <textarea
              rows="10"
              cols="50"
              className="app__contact-input"
            ></textarea>
            <br />
          </div>
          <br />

          <div style={{ width: "100%" }}>
            <button
              className="app__button"
              style={{ borderRadius: 5, margin: "auto" }}
            >
              Send Message
            </button>
          </div>
        </Grid>
      </Grid>