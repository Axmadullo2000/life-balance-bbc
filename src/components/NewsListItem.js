export const NewsListItem = ({  name, description, category, onDelete }) => {
  let elementClassName;
  switch (category) {
    case "Hot news":
      elementClassName = "bg-danger bg-gradient";
      break;

    case "Sport news":
      elementClassName = "bg-primary bg-gradient";
      break;

    case "Football news":
      elementClassName = "bg-success bg-gradient";
      break;

    case "Box news":
      elementClassName = "bg-dark bg-gradient";
      break;

    case "World news":
      elementClassName = "bg-warning bg-gradient"
    break

    default:
      elementClassName = "bg-info bg-gradient";
  }
  return (
    <li className={`card flex-row shadow-lg my-3 text-white ${elementClassName} newPosts`}>
      <img
        src="https://images.unsplash.com/photo-1557428894-56bcc97113fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        className="img-fluid w-25 d-inline"
        alt="News img"
      />
        <div className="card-body">
            <h3 className="card-title">{ name }</h3>
            <p className="card-text">{ description }</p>
        </div>
        <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
            <button type="button" onClick={ onDelete } className="btn-close" aria-label="Close"></button>
        </span>
    </li>
  );
};
