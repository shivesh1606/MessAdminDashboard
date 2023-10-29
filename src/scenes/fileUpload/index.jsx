import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle file upload logic here
    if (selectedFile) {
      // You can send the selectedFile to your server or perform other actions.
      const token = 'f5409ec9b09546174e31e3cbb1e667aeca71d952';

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Token ${token}`);
      myHeaders.append("Cookie", "csrftoken=W0Ie1PQfzEv2pR9MmChzSc6lWEr9o51G; sessionid=h1ebbalh0ho92pwr4yzt5117l2dehhmm");

      var formdata = new FormData();
      formdata.append("file", selectedFile, selectedFile.name);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:8000/user/upload/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      ></Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* File Upload Form */}
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              gridColumn: "span 12",
            }}
          >
            <input
              type="file"
              accept=".xlsx,.xls"  // Specify accepted file types
              onChange={handleFileChange}
              variant="contained"
              color="primary"
              startIcon={<DownloadOutlinedIcon />}
            />
            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<DownloadOutlinedIcon />}
            >
              Upload File
            </Button> */}
          </Box>
          <Box
            sx={{
              gridColumn: "span 12",
              marginTop: "20px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<DownloadOutlinedIcon />}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
}

export default FileUpload;
