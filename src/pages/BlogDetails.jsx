import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import blogData from "../assets/data/blogData";
import commentImg from "../assets/all-images/ava-1.jpg";
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
      <Container className="container">
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
              <h6 className="ps-5 fw-600">
                <blockquote className="fs-4">{singleBlog.quote}</blockquote>
              </h6>
              <p className="section_description">{singleBlog.description} </p>
            </div>
            <div className="comment_list mt-5">
              <div className="comment_list mt-5">
                <h4 className="mb-5"> 3 Comments</h4>
                <div className="single_comment d-flex gap-3">
                  <img src={commentImg} alt="comment" />
                  <div className="comment_content">
                    <h6>Jean Christophe Gomis</h6>
                    <p className="section_description mb-0 fw-bold">
                      {" "}
                      01 August 2022
                    </p>
                    <p className="section_description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates atque magnam laborum expedita amet architecto.
                    </p>
                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>
              </div>
              {/*=========comment_form=========*/}
              <div className="leave_comment-form mt-5">
                <h4>Laiser un commentaire</h4>
                <p className="section_description">
                  Tout commentaire doit être signé par son auteur
                </p>
                <Form>
                  <FormGroup className="d-flex gap-3">
                    <Input type="text" placeholder="Nom complet" />
                    <Input type="email" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                    <textarea
                      rows="10"
                      className="w-100 py-2 px-3"
                      placeholder="Commentaires..."
                    ></textarea>
                  </FormGroup>
                  <button className="btn comment_btn mt-3">
                    Publier un commentaire
                  </button>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="recent_post mt-2">
              <h5 className="fw-bold">Les plus récents</h5>
            </div>
            {blogData.map((item) => {
              return (
                <div className="recent_blog-post" key={item.id}>
                  <div className="recent_blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`} className="blogLinks">
                        {item.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default BlogDetails;
