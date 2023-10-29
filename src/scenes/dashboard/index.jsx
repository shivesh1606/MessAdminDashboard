import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

import { useEffect, useState } from "react";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [breakfast, setBreakfast] = useState();
  const [lunch, setLunch] = useState();
  const [snacks, setSnacks] = useState();
  const [dinner, setDinner] = useState();
  const [lineData, setLineData] = useState([]);

  const fetchconstData = async () => {
    const token = 'f5409ec9b09546174e31e3cbb1e667aeca71d952'
    const response = await fetch(`http://127.0.0.1:8000/user/checkin/?last_7_days=true`,{
    headers : {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }});
    const rdata = await response.json();
    console.log("RDATA",rdata)
    return rdata;

  }
  const getSixPrevDate = (i) => {
    let currDate = new Date();
    let currDateStr1 = new Date(currDate);
    currDateStr1.setDate(currDate.getDate() - i);
    currDateStr1 = currDateStr1.toISOString().slice(0, 10);
    return currDateStr1;
  }

  const getDayMealCount = (jsondata, mealType, date) => {
    let count = 0;
    Object.keys(jsondata).forEach(function (key) {

      if (jsondata[key]['slot']===mealType && jsondata[key]['date'] === date) {
        console.log("Meal Type")
        console.log(mealType)
        console.log("Date")
        console.log(date)
        count += 1;
      }
    });
    return count;
  }

  const setConstData = (jsondata) => {

    let breakfastCount = 0;
    let lunchCount = 0;
    let snacksCount = 0;
    let dinnerCount = 0;
        
    let currDate = new Date();
    let currDateStr = currDate.toISOString().slice(0,10);
    let currDateStr1 = getSixPrevDate(1);
    let currDateStr2 = getSixPrevDate(2);
    let currDateStr3 = getSixPrevDate(3);
    let currDateStr4 = getSixPrevDate(4);
    let currDateStr5 = getSixPrevDate(5);
    let currDateStr6 = getSixPrevDate(6);
    console.log("Current Date",jsondata)
    Object.keys(jsondata).forEach(function (key) {
      console.log("Key")
      if (jsondata[key]['slot']==='breakfast' && jsondata[key]['date'] === currDateStr) {
        breakfastCount += 1;
      }
      if (jsondata[key]['slot']==='lunch' && jsondata[key]['date'] === currDateStr) {
        lunchCount += 1;
      }
      if (jsondata[key]['slot']==='snacks' && jsondata[key]['date'] === currDateStr) {
        snacksCount += 1;
      }
      if (jsondata[key]['slot']==='dinner' && jsondata[key]['date'] === currDateStr) {
        dinnerCount += 1;
      }
      setBreakfast(breakfastCount);
      setLunch(lunchCount);
      setSnacks(snacksCount);
      setDinner(dinnerCount);
    
    });
    console.log("Current Date")
    console.log("Breakfast Count")
    console.log(breakfastCount)
    console.log("Lunch Count")
    console.log(lunchCount)
    const mockLineData = [
      {
        id: "BreakFast",
        color: tokens("dark").greenAccent[500],
        data: [
          {
            x: currDateStr,
            y: getDayMealCount(jsondata, 'breakfast', currDateStr),
          },
          {
            // decrease the current date by 1
            x: currDateStr1,
            y: getDayMealCount(jsondata, 'breakfast', currDateStr1),
          },
          {
            // decrease the current date by 2
            x: currDateStr2,
            y: getDayMealCount(jsondata, 'breakfast', currDateStr2),
          },
          {
            // decrease the current date by 3
            x: currDateStr3,
            y: getDayMealCount(jsondata, 'breakfast', currDateStr3),
          },
          {
            // decrease the current date by 4
            x: currDateStr4,
            y: getDayMealCount(jsondata, 'breakfast', currDateStr4),
          },
          {
            // decrease the current date by 5
            x: currDateStr5,
            y: getDayMealCount(jsondata, 'breakfast', currDateStr5),
          },
          {
            // decrease the current date by 6
            x: currDateStr6,
            y: getDayMealCount(jsondata, 'breakfast', currDateStr6),
          },


        ]
      },
      {
        id: "Lunch",
        color: tokens("dark").blueAccent[300],
        data: [
          {
            x: currDateStr,
            y: getDayMealCount(jsondata, 'lunch', currDateStr),
          },
          {
            x: currDateStr1,
            y: getDayMealCount(jsondata, 'lunch', currDateStr1),
          },
          {
            x: currDateStr2,
            y: getDayMealCount(jsondata, 'lunch', currDateStr2),
          },
          {
            x: currDateStr3,
            y: getDayMealCount(jsondata, 'lunch', currDateStr3),
          },
          {
            x: currDateStr4,
            y: getDayMealCount(jsondata, 'lunch', currDateStr4),
          },
          {
            x: currDateStr5,
            y: getDayMealCount(jsondata, 'lunch', currDateStr5),
          },
          {
            x: currDateStr6,
            y: getDayMealCount(jsondata, 'lunch', currDateStr6),
          }
        ]
      },
      {
        id: "Snacks",
        color: tokens("dark").redAccent[200],
        data: [
          {
            x: currDateStr,
            y: getDayMealCount(jsondata, 'snacks', currDateStr),
          },
          {
            x: currDateStr1,
            y: getDayMealCount(jsondata, 'snacks', currDateStr1),
          },
          {
            x: currDateStr2,
            y: getDayMealCount(jsondata, 'snacks', currDateStr2),
          },
          {
            x: currDateStr3,
            y: getDayMealCount(jsondata, 'snacks', currDateStr3),
          },
          {
            x: currDateStr4,
            y: getDayMealCount(jsondata, 'snacks', currDateStr4),
          },
          {
            x: currDateStr5,
            y: getDayMealCount(jsondata, 'snacks', currDateStr5),
          },
          {
            x: currDateStr6,
            y: getDayMealCount(jsondata, 'snacks', currDateStr6),
          }
        ]
      },
      {
        id: "Dinner",
        color: tokens("dark").redAccent[100],
        data: [
          {
            x: currDateStr,
            y: getDayMealCount(jsondata, 'dinner', currDateStr),
          },
          {
            x: currDateStr1,
            y: getDayMealCount(jsondata, 'dinner', currDateStr1),
          },
          {
            x: currDateStr2,
            y: getDayMealCount(jsondata, 'dinner', currDateStr2),
          },
          {
            x: currDateStr3,
            y: getDayMealCount(jsondata, 'dinner', currDateStr3),
          },
          {
            x: currDateStr4,
            y: getDayMealCount(jsondata, 'dinner', currDateStr4),
          },
          {
            x: currDateStr5,
            y: getDayMealCount(jsondata, 'dinner', currDateStr5),
          },
          {
            x: currDateStr6,
            y: getDayMealCount(jsondata, 'dinner', currDateStr6),
          }
        ]
      },

    ];

    console.log(setLineData(mockLineData));
    console.log("Line Data")
    console.log(lineData)
    
    console.log(mockLineData)
  }
  useEffect(() => {
    const fetchData = async () => {
      if (breakfast === undefined ) {
        try {
          const data = await fetchconstData();
          console.log("Data",data)
          setConstData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
  
    fetchData();
    console.log("******");
  }, []);

  useEffect(() => {
    console.log("Line Data updated:", lineData);
  }, [lineData]);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={breakfast}
            subtitle="Breakfasts Served"
            // progress="0.75"
            // increase="+14%"
            icon={
              <FreeBreakfastIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={lunch}
            subtitle="Lunch Served"
            // progress="0.50"
            // increase="+21%"
            icon={
              <LunchDiningIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={snacks}
            subtitle="Snacks Served"
            // progress="0.30"
            // increase="+5%"
            icon={
              <RestaurantIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={dinner}
            subtitle="Dinner Served"
            // progress="0.80"
            // increase="+43%"
            icon={
              <DinnerDiningIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true}  data={lineData}/>
          </Box>
        </Box> */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box> */}

        {/* ROW 3 */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box> */}
        <Box
          gridColumn="span 10"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            VEG / NON-VEG
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
