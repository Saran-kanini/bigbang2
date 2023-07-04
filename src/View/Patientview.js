import React from 'react';
import cardio from './cardio.jpg'

const PatientView = () => {
  return (
    <section className="hp-sec5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-6">
            <h3>
              Our Specialties<span style={{ color: '#6ca836' }}></span>
            </h3>
          </div>
          <div className="col-md-6 col-xs-6 p-roboto p-content view_all mb-30 pt-30">
            <a href="specialties.php">View All</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src={cardio} className="img-responsive" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="cardiology.php">Cardiology</a>
                </h5>
                {/* <p className="p-roboto sp_p">
                  Our Cardiology department is equipped with all the latest medical technologies to address the needs of the cardiac patients.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src="content/images/diabetology.jpg" className="img-responsive" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="diabetology.php">Diabetology</a>
                </h5>
                {/* <p className="p-roboto">
                  Our diabetologists are highly trained and qualified to provide comprehensive care to the patients.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src="content/images/nephrology.jpg" className="img-responsive" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="nephrology.php">Nephrology</a>
                </h5>
                {/* <p className="p-roboto">
                  Our nephrologists and urologists work together to diagnose and treat the full spectrum of kidney-related conditions.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src="content/images/ophthalmology.jpg" className="img-responsive" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="ophthalmology.php">Ophthalmology</a>
                </h5>
                {/* <p className="p-roboto">
                  Our ophthalmology team works with specialists of all disciplines to ensure the safe and effective performance of the procedures.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src="content/images/orthopedics.jpg" className="img-responsive" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="orthopedics.php">Orthopedics</a>
                </h5>
                {/* <p className="p-roboto">
                  Our experienced orthopaedic specialists will help you maintain the health of your bones and joints.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src="content/images/pulmonology.jpg" className="img-responsive" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="pulmonology.php">Pulmonology</a>
                </h5>
                {/* <p className="p-roboto">
                  Medway Hospitals provides comprehensive care for lung disease and offers a fusion of services to help you live a healthy life.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientView;
