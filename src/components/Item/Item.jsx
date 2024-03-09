import './Item.scss'

const Item = (props) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt='image' />

      </div>
      <div className="product-title">Nike</div>
      <div className="product-description">
        The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that
        targets breathability across high-heat areas. A slimmer heel collar and
        tongue reduce bulk, while exposed cables give you a snug fit at higher
        speeds.
      </div>
      <div className="product-bottom">
        <div className="product-price">$108.78</div>
        <div className="product-button">ADD TO CARD</div>
      </div>
    </div>
  );
};

export default Item
