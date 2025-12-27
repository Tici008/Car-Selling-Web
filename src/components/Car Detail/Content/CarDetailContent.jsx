import React from "react";
import "./CarDetailContent.css";
import Phone from "../../LOGO/CAR DETAIL/Phone";
import Email from "../../LOGO/CAR DETAIL/Email";
import { Button, Form, Input, Select } from "antd";
import DetailBox from "./CarContent-detail/detailBox";
const { TextArea } = Input;
function CarDetailContent({ carData }) {
  const [form] = Form.useForm();
  const onSubmit = () => {
    form.resetFields();
  };
  return (
    <div className="CarDetailContent-container">
      {/* DESCRIPTION */}
      <div className="CarDetailContent-des">
        <p className="detail-smallTitle">Description</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam
          nam eu nulla a. Vestibulum aliquet facilisi interdum nibh blandit. Leo
          amet ultricies cum cras sit sed curabitur ultrices faucibus. Ultrices
          pellentesque ultricies semper leo maecenas. Amet, et sagittis
          consectetur at euismod iaculis. Id non velit auctor praesent a amet
          risus facilisis. Lobortis nisl placerat orci, eu nisl ornare. Eu vitae
          pellentesque rhoncus eros vivamus est purus enim dui. Leo ac pharetra
          massa tristique. Libero aliquam pellentesque laoreet dui pulvinar
          facilisis. Id lectus mauris senectus sodales porta malesuada tincidunt
          et. Quam dui nulla venenatis suscipit nulla lectus volutpat, augue
          purus. Sed condimentum parturient maecenas viverra pulvinar leo augue
          nunc.
        </p>
        <p>Read more</p>
      </div>

      {/* PRICE + FEATURE*/}
      <div className="CarDetailContent-priceBox">${carData.cost}</div>
      <div className="CarDetailContent-feature">
        <p>Feature</p>
        <div></div>
        <p>Show more</p>
      </div>

      {/* DETAIL */}
      <div className="CarDetailContent-detail">
        <DetailBox
          in4Type="general"
          brand={carData.brand}
          model={carData.model}
          condition={carData.condition}
          year={carData.year}
          bodyType={carData.bodyType}
          seats={carData.seats}
          exteriorColor={carData.exteriorColor}
        />
        <DetailBox
          in4Type="engine"
          fuelType={carData.fuelType}
          mileage={carData.mileage}
          transmission={carData.transmission}
          driveTrain={carData.driveTrain}
          power={carData.power}
        />
        {carData.batteryCapacity && (
          <DetailBox
            in4Type="battery"
            engine={carData.batteryCapacity}
            engineTorque={carData.chargeSpeed}
            fuelTankCapacity={carData.chargePort}
            fuelConsumption={carData.chargeTime}
          />
        )}
        {carData.fuelTankCapacity && (
          <DetailBox
            in4Type="fuel"
            engine={carData.engine}
            engineTorque={carData.engineTorque}
            fuelTankCapacity={carData.fuelTankCapacity}
            fuelConsumption={carData.fuelConsumption}
          />
        )}

        <DetailBox
          in4Type="dimension"
          length={carData.length}
          width={carData.width}
          height={carData.height}
          cargoVolume={carData.cargoVolume}
        />
      </div>

      {/* DEALER */}
      <div className="CarDetailContent-dealer">
        <p className="detail-smallTitle">Dealer Info</p>
        <div className="car-dealer">
          <img
            src="../../../../public/img/CARDETAIL img/dealer ava/dealerRed.png"
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <p>Alfredo Gouse</p>
            <p>Dealer</p>
          </div>
          <div className="dealer-stick"></div>
          <Phone />
          <p>240-865-3730</p>
          <div className="dealer-stick"></div>
          <Email />
          <p>alfred.g@mail.com</p>
        </div>
      </div>

      {/* CONTACT + LOCATION */}
      <div className="CarDetailContent-contact">
        <p className="detail-smallTitle">Contact</p>

        <Form form={form} onFinish={onSubmit} className="detail-form-container">
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
            <div>
              <div>
                <p className="detail-form-title">Phone (Optional)</p>
                <Form.Item name={"phone"}>
                  <Input
                    className="detail-form-input"
                    placeholder="(000)000-0000"
                  ></Input>
                </Form.Item>
              </div>
              <div>
                <p className="detail-form-title">Model</p>
                <Form.Item name={"model"}>
                  <Select
                    className="detail-form-input"
                    options={[
                      { value: "honda", label: "Honda" },
                      { value: "lexus", label: "Lexus" },
                      { value: "audi", label: "Audi" },
                      { value: "ford", label: "Ford" },
                      { value: "tesla", label: "Tesla" },
                    ]}
                    placeholder="Model"
                  />
                </Form.Item>
              </div>
            </div>
          </div>

          <div>
            <p className="detail-form-title">Comment</p>

            <Form.Item name={"comment"}>
              <TextArea className="detail-form-comment" />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="detail-form-submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div>
          <p className="detail-smallTitle">Location</p>
          <p className="detail-location">
            9500 E Tsala Apopka Dr, Floral City, FL, 34436, Florida, USA
          </p>
          <img
            style={{ marginTop: "20px", width: "100%", height: "100%" }}
            src="../../../../public/img/CARDETAIL img/location.png"
            alt=""
          />
        </div>
      </div>

      {/* CREDIT */}
      <div className="CarDetailContent-credit">
        <p className="detail-smallTitle">Credit Simulation</p>
        <div className="payment-simulation">
          <div className="CarDetailContent-credit-left"></div>
          <div className="CarDetailContent-credit-right">
            <p>Monthly Payment</p>
            <div></div>
            <p>$2,878</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailContent;
