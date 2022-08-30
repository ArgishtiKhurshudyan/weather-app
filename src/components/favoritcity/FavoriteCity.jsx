import React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {Delete, Person} from "@mui/icons-material";
import "./city.scss"


const FavoriteCity = () => {
  const [data, setData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  // "https://jsonplaceholder.typicode.com/users"
  useEffect(() => {
    fetch("https://github.com/shivammathur/countrycity/blob/main/data/geo.json")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        throw new Error()
      })
  }, [])

  console.log(data)
  const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
      field: 'username',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 110,
      editable: true,

    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      editable: true
    },
    {
      field: 'delete',
      headerName: 'Delete',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 90,
      renderCell: () => <Delete style={{cursor: "pointer", color: "red"}} onClick={() => {
        const selectedIDs = new Set(selectionModel);
        setData((data) => data.filter((x) => !selectedIDs.has(x.id)));
      }
      }/>
    },

  ]

  return (
    <div className="box-container">
      <Box sx={{height: 400, width: '100%', backgroundColor:"white"}}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[4]}
          checkboxSelection
          // disableSelectionOnClick
          experimentalFeatures={{newEditingApi: true}}
          onSelectionModelChange={(ids) => {
            setSelectionModel(ids);
          }}
        />
      </Box>
    </div>
  );
};

export default FavoriteCity;