import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "react-js-pagination";

import { getFilteredServices } from "../store/services";
import Filter from "./Filter";

const PER_PAGE = 5;

const Services = () => {
  const [activePage, setActivePage] = useState(1);
  const filteredServices = useSelector(getFilteredServices);

  const handlePageChange = async (newCurrentPage) => {
    setActivePage(newCurrentPage);
  };

  const pageServices = filteredServices.filter(
    (item, index) =>
      index > (activePage - 1) * PER_PAGE - 1 && index < activePage * PER_PAGE
  );

  return (
    <div>
      <Filter />
      {filteredServices.length > 0 ? (
        <div>
          <Pagination
            prevPageText="prev"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            activePage={activePage}
            itemsCountPerPage={PER_PAGE}
            totalItemsCount={filteredServices.length}
            onChange={handlePageChange}
          />
          <ul>
            {pageServices.map((item, index) => (
              <li key={index} className="service-box">
                <img src={`${item.img}`} />
                <div className="group-info-about-service">
                  <h1>{item.title}</h1>
                  <p>
                    от {item.age[0]} до {item.age[1]} лет
                  </p>
                  <p>{item.gender}</p>
                  <p>{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
          <Pagination
            prevPageText="prev"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            activePage={activePage}
            itemsCountPerPage={PER_PAGE}
            totalItemsCount={filteredServices.length}
            onChange={handlePageChange}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Services;
