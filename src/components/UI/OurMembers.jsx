import React from "react";
import "../../styles/OurMembers.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const OUR_MEMBERS = [
  {
    name: "Jean Christophe Gomis",
    experience: " 3 ans d'éxperiences",
    fbUrl: "#",
    instUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Marvin Atohoun",
    experience: " 5 ans d'éxperiences",
    fbUrl: "#",
    instUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Dimitri Blake",
    experience: " 10 ans d'éxperiences",
    fbUrl: "#",
    instUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
    imgUrl: ava03,
  },
  {
    name: "Loic de Kaloutar",
    experience: " 10 ans d'éxperiences",
    fbUrl: "#",
    instUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR_MEMBERS.map((item, index) => {
        return (
          <Col lg="3" md="3" sm="6" xs="6" key={index} className="mb-4">
            <div className="single_member">
              <div className="single_member-img">
                <img src={item.imgUrl} alt="avata01" className="w-100" />
                <div className="single_member-social text-center">
                  <Link to={item.fbUrl}>
                    <i class="ri-facebook-box-fill"></i>
                  </Link>
                  <Link to={item.twitterUrl}>
                    <i className="ri-twitter-line"></i>
                  </Link>
                  <Link to={item.instUrl}>
                    <i className="ri-instagram-line"></i>
                  </Link>
                  <Link to={item.instUrl}>
                    <i className="ri-linkedin-box-fill"></i>
                  </Link>
                </div>
              </div>
              <h6 className="text-center mb-0 mt-3">{item.name}</h6>
              <p className="section_description text-center">
                {item.experience}
              </p>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default OurMembers;
