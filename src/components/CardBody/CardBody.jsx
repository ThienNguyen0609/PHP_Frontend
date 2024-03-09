import './CardBody.scss'

const CardBody = ({children}) => {
  return (
    <>
      <div className="body">
        {children}
      </div>
    </>
  );
};

export default CardBody
