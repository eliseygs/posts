import React from "react";
import {getPagesArray}  from 'D:/works/top/react-fund-course/src/utils/pages';

const Pagination = ({totalPages,pages,changePage}) => {
        let pagesArray = getPagesArray(totalPages)
    return(
        <div className="page__wrapper">
        {pagesArray.map(p=>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={pages === p ? 'page page__current' : 'page' }>
         {p}
        </span>
        )}
        </div>
    )
}

export default Pagination;