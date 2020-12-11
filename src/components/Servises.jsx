import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import { getFilteredServices } from "../store/services";
import Filter from "./Filter";
import ContactMe from "./ContactMe";

const PER_PAGE = 5;

const Services = () => {
  const [hasMore, setHasMore] = useState(true);
  const [servicesList, setServicesList] = useState();
  const filteredServices = useSelector(getFilteredServices);

  const loadFunc = (page) => {
    const pageServices = filteredServices.filter(
      (item, index) => index < page * PER_PAGE
    );
    setServicesList(pageServices);

    if (page === Math.ceil(filteredServices.length / PER_PAGE))
      setHasMore(false);
  };

  useEffect(() => {
    loadFunc(1);
  }, [filteredServices]);

  return (
    <div>
      <Filter />
      {filteredServices.length > 0 ? (
        <div>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={hasMore}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            <ul>
              {servicesList?.map((item, index) => (
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
          </InfiniteScroll>
          <ContactMe />
        </div>
      ) : null}
    </div>
  );
};

export default Services;
