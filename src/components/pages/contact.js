import React from "react";
import contactFormImg from "../../../static/assets/auth/images/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function () {
    return(
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactFormImg + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-contact-column"><div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">555-555-5555</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">gina@example.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Spanish Fork, UT</div>
          </div>
        </div>
      </div>
    </div>
    )
}