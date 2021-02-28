import React, { useEffect } from 'react'
import { MDBDataTableV5 } from "mdbreact";
const Events = ({events,setEvents}) => {

    useEffect(()=>{
        setDatatable({ ...datatable, rows: [...events] });
    },[events])
    const [datatable, setDatatable] = React.useState({
        columns: [
          {
            label: "Organinser",
            field: "org",
           
            attributes: {
              "aria-controls": "DataTable",
              "aria-label": "Name",
            },
          },
          {
            label: "Company",
            field: "company",
            width: 270,
          },
         
          {
            label: "About",
            field: "about",
            
            width: 100,
          },
    
          {
            label: "Company",
            field: "company",
            sort: "disabled",
            width: 100,
          },
          {
            label: "Schedules for",
            field: "schedule",
            sort: "disabled",
            width: 100,
          },
          {
            field: "duration",
            label: "Duration",
          },
          {
            field: "capacity",
            label: "Capacity",
          },
        ],
        rows: [],
      });
    
      return <MDBDataTableV5 hover data={datatable} materialSearch />;
    
}

export default Events
