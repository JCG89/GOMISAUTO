import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import blogData from "../assets/data/blogData";
import Helmet from "../components/Helmet/Helmet";
import "../styles/BlogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();

  const singleBlog = blogData.find((blog) => {
    return blog.title === slug;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleBlog]);
  return (
    <Helmet title={singleBlog.title}>
      <Container>
        <Row>
          <Col lg="8" md="8">
            <div className="blog_details">
              <img src={singleBlog.imgUrl} alt="singleBlog" className="w-100" />
              <h2 className="section_title mt-4"> {singleBlog.title}</h2>

              <div className="blog_publisher d-flex align-items-center gap-4 mb-4">
                <span className="blog_author">
                  <i className="ri-user-line">{singleBlog.author}</i>
                </span>
                <span className="d-flex align-items-center gap-1 section_description">
                  <i className="ri-calendar-line">{singleBlog.date}</i>
                </span>
                <span className="d-flex align-items-center gap-1 section_description">
                  <i className="ri-time-line">{singleBlog.time}</i>
                </span>
              </div>
              <p className="section_description"> {singleBlog.description} </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default BlogDetails;
