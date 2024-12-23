import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Header from "../component/Header"
import "./help.css";
function Help() {
  return (
    <>
      <Header title="Help" smtitle="Help" />
      <div className="container help-box">
        <h2>Help</h2>

        <Accordion defaultActiveKey="0">
          <div className="row">
            {/* getting start qustions */}
            <div div className="col-lg-5 help-items">
              <h3>Getting Started</h3>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="iteam-h">
                  How do I start working on a course?
                </Accordion.Header>
                <Accordion.Body>
                  We have two types of courses, there are free courses and paid
                  courses. If you choose a paid course, you will fill out a
                  form, and your request and data will be reviewed, then a
                  customer service representative will contact you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="item-h">
                  {" "}
                  When will my course begin?
                </Accordion.Header>
                <Accordion.Body>
                  When will the course start? After your request is completed
                  within 24 hours You will be sent a WhatsApp group link for the
                  course You will be informed of the date and the course will
                  begin within a week
                </Accordion.Body>
              </Accordion.Item>
            </div>
            {/* course payment&cost qustions */}
            <div className="col-lg-5 help-items">
              <h3>Cost & Payment</h3>
              <Accordion.Item eventKey="3">
                <Accordion.Header className="item-head">
                  Free courses
                </Accordion.Header>
                <Accordion.Body>We have 100% free courses.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className="item-head">
                  Paid courses
                </Accordion.Header>
                <Accordion.Body>
                  Expenses are sent to (InstaPay, electronic wallet). Send a
                  copy of the payment fees and name to one of the customer
                  service representative numbers
                </Accordion.Body>
              </Accordion.Item>
            </div>
            {/* course certification qustions */}
            <div className="col-lg-5 help-items">
              <h3>Course & Program Certificates</h3>
              <Accordion.Item eventKey="5">
                <Accordion.Header className="item-head">
                  How do I obtain a certificate?
                </Accordion.Header>
                <Accordion.Body>
                  Learners will receive a certificate at the completion of their
                  online courses. Once their course progress status is set to
                  “Completed”, learners will be sent a certificate of
                  completion.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header className="item-head">
                  {" "}
                  How soon will I receive my certificate?
                </Accordion.Header>
                <Accordion.Body>
                  Learners will recieve their certificated from anywhere between
                  1 day – 1 week after they have completed their courses.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            {/* course problem qustions */}
            <div className="col-lg-5 help-items">
              <h3>Problem with your Order</h3>
              <Accordion.Item eventKey="7">
                <Accordion.Header className="item-head">
                  How do I start working on a course?
                </Accordion.Header>
                <Accordion.Body>
                  There’s a multitude of reasons why a learner would not receive
                  full access to their course some of them include: Not
                  completing a prescreening form. Using the wrong/invalid email
                  during registration.
                  <ul>
                    <li>Not completing a prescreening form.</li>
                    <li>Using multiple emails for the signup process</li>
                    <li>Using the wrong/invalid email during registration.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header className="item-head">
                  {" "}
                  Why i can't submit the form?
                </Accordion.Header>
                <Accordion.Body>
                  Because you don't fill all the fields
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>
        </Accordion>
      </div>
    </>
  );
}

export default Help;
