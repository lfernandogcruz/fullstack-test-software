import PropTypes from "prop-types";

function ProductCard(props) {
  const { data, index } = props;
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="product-card__info">
        <h3>Producto #{index + 1}</h3>
        <p>{data.title}</p>
        <h5>$ {data.price}</h5>
      </div>
      <div className="product-card__actions">
        <button
          type="button"
          onClick={() => {
            window.open(data.link, "_blank");
          }}
        >
          Ir a web
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
