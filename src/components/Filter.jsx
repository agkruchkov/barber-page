import React from "react";
import { Form, Button } from "bootstrap-4-react";
import { useDispatch, useSelector } from "react-redux";

import { filtered, getFilters } from "../store/filters";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      filtered({
        query: event.target[0].value,
        age: +event.target[1].value,
        gender: event.target[2].value,
      })
    );
  };

  return (
    <Form className="services-filter" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          type="text"
          placeholder="Search"
          mr="sm-3"
          value={filters.query}
          onChange={(event) =>
            dispatch(filtered({ query: event.target.value }))
          }
        />
      </Form.Group>
      <Form.Group>
        <label htmlFor="age">Возраст</label>
        <Form.Input type="text" id="age" placeholder="Age" />
      </Form.Group>
      <Form.Group>
        <label htmlFor="gender">Пол</label>
        <Form.Select id="gender">
          <option>Для всех</option>
          <option>Для мужчин</option>
          <option>Для женщин</option>
        </Form.Select>
      </Form.Group>

      <Button primary type="submit">
        Отфильтровать список услуг
      </Button>
    </Form>
  );
};

export default Filter;
