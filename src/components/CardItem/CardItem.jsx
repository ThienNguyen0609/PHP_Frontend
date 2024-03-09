import "./CardItem.scss";
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";
import trash from "../../assets/images/trash.png";
import { useEffect, useRef, useState } from "react";

const CardItem = (props) => {
  const [count, setCount] = useState(1);
  const itemRef = useRef();
  const handleCountDown = () => {
    setCount((cnt) => --cnt);
    console.log(count)
  };
  const handleCountUp = () => {
    setCount((cnt) => ++cnt);
  };
  const removeItem = () => {
    itemRef.current.classList.add("scale-animation");
    setTimeout(() => {
      itemRef.current.parentNode.removeChild(itemRef.current)
    }, 500)
  }
  const handleRemoveItem = () => {
    removeItem();
  };
  useEffect(() => {
    if(count === 0) {
      removeItem();
    }
  }, [count])
  return (
    <div ref={itemRef} className="card-item">
      <div className="card-item-image">
        <img src={props.image} alt="image" />
      </div>
      <div className="card-item-content">
        <div className="card-item-name">Nike CruzrOne</div>
        <div className="card-item-price">$100.97</div>
        <div className="card-item-actions">
          <div className="card-item-count">
            <div
              onMouseDown={() => handleCountDown()}
              className="card-item-icon mp-icon"
            >
              <img src={minus} alt="minus" />
            </div>
            <p className="count-number">{count}</p>
            <div
              onMouseDown={() => handleCountUp()}
              className="card-item-icon mp-icon"
            >
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="card-item-remove">
            <div
              onMouseDown={() => handleRemoveItem()}
              className="card-item-icon t-icon"
            >
              <img src={trash} alt="trash" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
