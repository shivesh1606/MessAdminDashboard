import React, { useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import axios from 'axios';

const ManageStudents = () => {
  const theme = useTheme();
  const [searchRollNo, setSearchRollNo] = useState('');

  const handleAction = () => {
    const adminToken = localStorage.getItem("admintoken") // Replace with our actual admin token
    const apiUrl = `http://localhost:8000/user/users/${searchRollNo}/`;
  
    axios({
      method: 'DELETE', 
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    })
    .then(response => {
      alert('Action Successful'); 
      console.log('Action successful', response);
    })
    .catch(error => {
      console.error('Error performing action', error);
    });
  };
  

  return (
    <Box m="20px" textAlign="center">
      <Header
        title="MANAGE STUDENTS"
        subtitle="Manage Students"
      />
      <Box mt={12}>
        <TextField
          label="Enter Roll Number"
          value={searchRollNo}
          onChange={(e) => setSearchRollNo(e.target.value)}
          variant="outlined"
          margin="dense"
          InputProps={{
            style: { 
              borderColor: 'white',  
              '&:focus': {
                borderColor: 'white' 
              },
              fontSize: '1.5rem',
              outline: 'white solid 2px'
            },
          }}
          InputLabelProps={{ 
            style: {
              fontSize: '1.5rem' 
            }
          }}
        />
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
      <Button variant="contained" color="error" onClick={handleAction} style={{fontSize: '1.2rem', marginRight: '8px'}}>
          Deactivate
        </Button>
        <Button variant="contained" color="success" onClick={handleAction} style={{fontSize: '1.2rem'}}>
          Activate
        </Button>
      </Box>
    </Box>
  );
};

export default ManageStudents;
















// import React, { useState } from 'react';
// import { Box, Button, TextField } from "@mui/material";
// import Header from "../../components/Header";
// import { useTheme } from "@mui/material";
// import { useDispatch, useSelector } from 'react-redux';

// const ManageStudents = () => {
//   const theme = useTheme();
//   const dispatch = useDispatch();
//   const studentList = useSelector((state) => state.studentList);
//   const [searchRollNo, setSearchRollNo] = useState('');

//   const handleDeactivate = async () => {
//     try {
//         const adminToken = localStorage.getItem("admintoken") // Replace with the actual admin token
//         const apiUrl = `http://localhost:8000/user/users/${searchRollNo}/`; //recheck api url
  
//       const response = await fetch(apiUrl, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Token ${adminToken}`
//         },
//       });
  
//       if (response.ok) {
//         alert('Deactivation successful');
//         console.log('Deactivation successful');
//       } else {
//         alert('Error deactivating student');
//         console.error('Error deactivating student:', response.status);
//       }
//     } catch (error) {
//       console.error('Error deactivating student:', error);
//     }
//     setSearchRollNo(''); // Reset the searchRollNo after deactivation
//   };
  
//   return (
//     <Box m="20px" textAlign="center">
//       <Header
//         title="MANAGE STUDENTS"
//         subtitle="Manage Students"
//       />
//       <Box mt={12}>
//         <TextField
//           label="Enter Roll Number"
//           value={searchRollNo}
//           onChange={(e) => setSearchRollNo(e.target.value)}
//           variant="outlined"
//           margin="dense"

//           InputProps={{
//             style: { 
//               borderColor: 'white',  
//               '&:focus': {
//                 borderColor: 'white' 
//               },
//               fontSize: '1.5rem'
//             },
//           }}
//           InputLabelProps={{ 
//             shrink: true,
//             style: {
//               fontSize: '1.5rem' 
//             }
//           }}
//         />
//       </Box>
//       <Box mt={4}>
//         <Button variant="contained" color="error" onClick={handleDeactivate} style={{fontSize: '1rem',marginRight: '8px'}}>
//           Deactivate
//         </Button>
//         {/* <Button variant="contained" color="success" onClick={handleActivate} style={{fontSize: '1rem'}}>
//           Activate
//         </Button> */}
//       </Box>
//     </Box>
//   );
// };

// export default ManageStudents;
