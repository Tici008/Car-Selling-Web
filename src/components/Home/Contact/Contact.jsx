import React from "react";
import "./Contact.css";
import mapImg from "../../img/HOME_img/map.png";
import { Button, Form, Input, Select } from "antd";
const { TextArea } = Input;

function Contact() {
  const [form] = Form.useForm();
  const onSubmit = () => {
    form.resetFields();
  };
  return (
    <div className="home-contact-container">
      <div className="home-contact-img">
        {" "}
        <img src={mapImg} alt="" />
      </div>
      <div className="home-contact-form">
        <p className="home-form-title">Contact</p>
        <Form
          form={form}
          onFinish={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <div>
                <p className="detail-form-title">Name</p>
                <Form.Item name="fullName">
                  <Input
                    className="detail-form-input"
                    placeholder="Full name"
                  ></Input>
                </Form.Item>
              </div>

              <div>
                <p className="detail-form-title">Email</p>

                <Form.Item name="email">
                  <Input
                    className="detail-form-input"
                    placeholder="email@gmail.com"
                  ></Input>
                </Form.Item>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="detail-form-title">Phone</p>
              <Form.Item name={"phone"}>
                <Input
                  className="detail-form-input"
                  placeholder="(000)000-0000"
                ></Input>
              </Form.Item>
            </div>
          </div>

          <div>
            <p className="detail-form-title">Comment</p>

            <Form.Item name={"comment"}>
              <TextArea className="home-form-comment" />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="home-form-submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
