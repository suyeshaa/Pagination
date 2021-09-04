import React from "react";

const Paginatn = ({ totalPosts, postPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((el) => {
          return (
            <li key={el}>
              <a onClick={() => paginate(el)} href="!#">
                {el}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginatn;
