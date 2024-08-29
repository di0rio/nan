import './Cards.module.css'; 




function Cards({ title, image, description }) {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Cards;