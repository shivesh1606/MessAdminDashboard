import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentListAsync } from '../../redux/slices/studentListSlice';

const StudentMealTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.studentList);

  useEffect(() => {
    dispatch(fetchStudentListAsync());
  }, [dispatch]);

  const [sortModel, setSortModel] = useState([
    { field: 'mealsThisWeek', sort: 'asc' }, // Default sorting by mealsThisWeek
  ]);

  const columns = [
    { field: "serialNumber", headerName: "Serial No.", flex: 0.5 },
    { field: "rollNo", headerName: "Roll No." },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "mealsThisWeek", headerName: "Meals This Week", flex: 1,sortable: true },
  ];

  return (
    <Box m="20px">
      <Header
        title="Student Meal Stats"
        subtitle="Number of times a student ate in mess"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={studentList}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default StudentMealTable;
