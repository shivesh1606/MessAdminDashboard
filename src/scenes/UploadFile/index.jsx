import React, { useState } from 'react';
import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const UploadCSV = () => {
  const theme = useTheme();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      fetch('http://localhost:8000/user/upload/', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert('File uploaded successfully');
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      alert("Please select a file before uploading.");
    }
  };

  return (
    <Box m="auto" textAlign="center" maxWidth="500px" p="20px">
      <Header
        title="UPLOAD FILE"
        subtitle="Upload File"
      />
      <Box mt={12}>
        <input
          accept=".xlsx"
          style={{ display: 'none' }}
          id="xlsx-file"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="xlsx-file">
          <Button 
            variant="outlined" 
            color="primary" 
            component="span"
            sx={{
              backgroundColor: '#4cceac',
              color: 'white',
              fontSize: '1.3rem',
              borderColor: '#4cceac',
              width: '150px', // Reduce width
            }}
          >
            Choose File
          </Button>
        </label>
        {selectedFile && (
          <Box mt={2}>
            <strong>Selected File:</strong> {selectedFile.name}
          </Box>
        )}
      </Box>
      <Box mt={2}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleUpload} 
          sx={{
            backgroundColor: '#2a2d64',
            color: 'white',
            fontSize: '1.3rem',
            width: '150px',
            height: '30px' // Reduce width
          }}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default UploadCSV;
