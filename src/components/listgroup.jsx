import React from "react";

const ListGroup = props => {
  return (
    <div className="mt-5 ml-3">
      <ul className="list-group">
        {props.categories.map(category => (
          <li
            onClick={() => props.handleSelectedCategory(category)}
            key={category.id}
            className={
              category.id === props.selectedcategory
                ? "list-group-item active bg-dark"
                : "list-group-item"
            }
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
