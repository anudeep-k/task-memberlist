import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MDBBtn } from "mdbreact";
// import { MDBSelect } from "mdbreact";

import { MDBDataTableV5 } from "mdbreact";
const Members = ({ members, setMembers, events, setEvents }) => {
  const dispatch = useDispatch();
  const removeMember = (i) => {
    members.splice(i, 1);
    setMembers(members);
    let rows = [];
    rows = members.map((item, index) => {
      return {
        id: item.id,
        name: item.name,
        company: item.company,
        age: item.age,
        email: item.email,
        phone: item.phone,
        addevent: (
          <select className="browser-default custom-select">
            <option>Choose your option</option>
            {events.map((event) => (
              <option>{event.company}</option>
            ))}

            {/* <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option> */}
          </select>
        ),
        delete: <MDBBtn onClick={() => removeMember(index)}>X</MDBBtn>,
      };
    });

    setDatatable({ ...datatable, rows: [...rows] });
  };

  const eventHandler = (event, memIndex) => {
    const allevents = [...events];
    const allmembers = [...members];

    const filteredEvent = allevents.filter((e) => e.id == event.target.value);

    filteredEvent[0].capacity--;
    const filteredMem = allmembers[memIndex];

    filteredMem.events.push(filteredEvent[0]);
    allmembers[memIndex] = filteredMem;
    setMembers([...allmembers]);
    const index = allevents.findIndex((item) => item.id == event.target.value);
    allevents[index] = filteredEvent[0];

    setEvents([...allevents]);
  };
  useEffect(() => {
    let rows = [];
    rows = members.map((item, index) => {
      return {
        id: item.id,
        name: item.name,
        company: item.company,
        age: item.age,
        email: item.email,
        phone: item.phone,
        events: item.events.length,
        addevent: (
          <select
            className="browser-default custom-select"
            onChange={(e) => eventHandler(e, index)}
          >
            <option>Choose your option</option>

            {events.map((event) => (
              <option value={event.id}>
                {event.id}-{event.company}-{event.capacity}
              </option>
            ))}
          </select>
        ),
        delete: <MDBBtn onClick={() => removeMember(index)}>X</MDBBtn>,
      };
    });
    setDatatable({ ...datatable, rows: [...rows] });
  }, [members]);
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Name",
        field: "name",

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Age",
        field: "age",
        width: 100,
      },
      {
        label: "Phone",
        field: "phone",
        width: 100,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },

      {
        label: "Company",
        field: "company",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Events",
        field: "events",
        sort: "disabled",
        width: 100,
      },
      {
        field: "addevent",
        label: "Add Event",
      },
      {
        field: "delete",
        label: "Delete",
      },
    ],
    rows: [],
  });

  return <MDBDataTableV5 hover data={datatable} materialSearch />;
};

export default Members;
