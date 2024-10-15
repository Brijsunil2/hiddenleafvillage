const InfoCard = ({ image, imageAlt, title, text }) => {
  return (
    <div className="infocard">
      <div className="image p-1">
        <img className="infocard-img" src={image} alt={imageAlt} height="100%" />
      </div>
      <h3 className="my-2">{title}</h3>
      <p className="">{text}</p>
    </div>
  );
};

export default InfoCard;
