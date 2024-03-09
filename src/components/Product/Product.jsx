import "./Product.scss";
import Item from "../Item/Item";
import CardHeader from "../CartHeader/CardHeader";
import CardBody from "../CardBody/CardBody";
import { useState } from "react";

const Product = () => {
  const [img1, setImg1] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png")
  const [img2, setImg2] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png")
  const [img3, setImg3] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png")
  const [img4, setImg4] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png")
  const [img5, setImg5] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/odyssey-react-flyknit-2-mens-running-shoe-T3VG7N-removebg-preview.png")
  const [img6, setImg6] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-infinity-run-flyknit-mens-running-shoe-RQ484B__2_-removebg-preview.png")
  const [img7, setImg7] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-miler-mens-running-shoe-DgF6nr-removebg-preview.png")
  const [img8, setImg8] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/renew-ride-mens-running-shoe-JkhdfR-removebg-preview.png")
  const [img9, setImg9] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/vaporfly-4-flyknit-running-shoe-v7G3FB-removebg-preview.png")
  const [img10, setImg10] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png")
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <CardHeader hasTotalPrice={false} title={"Our products"} />
          <CardBody>
            <Item image={img1} />
            <Item image={img2} />
            <Item image={img3} />
            <Item image={img4} />
            <Item image={img5} />
            <Item image={img6} />
            <Item image={img7} />
            <Item image={img8} />
            <Item image={img9} />
            <Item image={img10} />
          </CardBody>
        </div>
      </div>
    </>
  );
};

export default Product;
