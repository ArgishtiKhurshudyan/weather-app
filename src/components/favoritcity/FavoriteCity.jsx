import React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {Delete} from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./city.scss"

const FavoriteCity = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      return JSON.parse((savedData))
    } else {
      return []
    }
  });
  const [inputValue, setInputValue] = useState('')
  const [location, setLocation] = useState();
  const [selectionModel, setSelectionModel] = useState([]);

  useEffect(() => {
    fetching(location);
    localStorage.setItem("data", JSON.stringify(data));
  }, [location, data])

  const fetching = async (location) => {
    try {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=135&q=${location}&appid=80b086b030a9c176bfdfbb17ba667927`)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          setData([
            ...data,
            {
              id: Date.now(),
              name: res.name,
              country: res.sys.country,
              weather: res.weather?.[0].main,
              main: res.main.temp + "F",
            }
          ]);
        })
    } catch {
      throw new Error()
    }
  }

  const handleAdd = () => {
    fetching(inputValue);
  }

  const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
      field: 'name',
      headerName: 'city name',
      width: 150,
      editable: true,
    },
    {
      id: 2,
      field: 'country',
      headerName: 'Country',
      width: 110,
      editable: true,
    },
    {
      id: 3,
      field: "weather",
      headerName: 'Weather',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      editable: true
    },
    {
      id: 6,
      field: "main",
      headerName: 'Temp',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      editable: true
    },
    {
      id: 4,
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
      <h1>Favorite cities</h1>
      <Box sx={{height: 400, width: '100%', backgroundColor: "white"}}>
        <TextField
          onChange={(e) => setInputValue(e.target.value)}
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
        />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" onClick={handleAdd}>
            Add
          </Button>
        </Stack>
        <DataGrid
          style={{backgroundColor: "white"}}
          rows={data}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[4]}
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