import React from "react";
import { Carousel } from "antd";
import img1 from "../../component/img/1673986436931.jpg";
import img2 from "../../component/img/healthcare-and-medicine-concept-smart-medical-doctor-working-with-stethoscope-at-modern-hospital-free-photo.jpg";
import img3 from "../../component/img/doctors-group-medical-over-blue-clinic-background-88012369.jpg";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const imgStyle = {
  width: "100%",
  height: "500px",
  objectFit: "cover", // This ensures the image covers the entire area without distortion
};

const App = () => (
  <Carousel arrows infinite={true} autoplay autoplaySpeed={1500}>
    <div>
      <img style={{ ...contentStyle, ...imgStyle }} src={img1} alt="img1" />
    </div>
    <div>
      <img style={{ ...contentStyle, ...imgStyle }} src={img2} alt="img2" />
    </div>
    <div>
      <img style={{ ...contentStyle, ...imgStyle }} src={img3} alt="img3" />
    </div>
  </Carousel>
);

export default App;
