import React, { useEffect, useState } from 'react';
import AppTable from './AppTable';
import r_tabel_arrow from '../assets/images/Dashboard/r_tabel_arrow.svg';
import l_tabel_arrow from '../assets/images/Dashboard/l_tabel_arrow.svg';
import r_tabel_arrow_hover from '../assets/images/Dashboard/r_tabel_arrow_hover.svg';
import l_tabel_arrow_hover from '../assets/images/Dashboard/l_tabel_arrow_hover.svg';
import Clock from '../assets/images/Dashboard/TimeClockicon.svg';


import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, ArcElement } from 'chart.js';
import {recordUserVisits} from "../abi/firebasecode";
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { getDashBoardDetails } from '../abi/firebasecode';
import Timer from './Timer';
// import ProgressBar from './CircleTimer';
import 'react-circular-progressbar/dist/styles.css';

import {  CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { getTimeLeftForJoker } from '../abi/CommonSolFunctions';
import PageFilter1 from './Common/PageFilter1';

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler, ArcElement
);

const Dashboard = ({balanceOfTokens, totalSupply, totalBurn}) => {
 
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider();

  const [xdata, setxdata] = useState("");
  const [ydata, setydata] = useState("");
  const [zdata, setzdata] = useState("");
  const [adata, setadata] = useState("");
  const [secondsLeftState, setSecondsLeftState] = useState("");
  const [secondsLeftInTextState, setSecondsLeftInTextState] = useState("");
  const [timePercentageState, setTimePercentageState] = useState("");

  const [doughnutData, setDoughnutData] = useState({
    responsive: true,
    labels: [ "User Holdings","Burned"],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ['#AA14F0',"white"],
        hoverBackgroundColor: [ '#AA14F0',"white"],
      },
    ],
  });


  // const [linedata1] = useState({
  //   labels: ["Jan1","Jan2","Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8"],
  //   datasets: [
  //     {
  //       label: "First dataset",
  //       data: [10000000000000000, 21000000000000000, 21500000000000000, 32000000000000000, 
  //         43000000000000000, 53300000000000000, 53400000000000000, 63800000000000000,
  //          60000000000000000, 65400000000000000],
  //       fill: "start",
  //       backgroundColor: (context: ScriptableContext<line>) => {
  //         const ctx = context.chart.ctx;
  //         const gradient = ctx.createLinearGradient(30, 0, 0, 250);
  //         gradient.addColorStop(0, "#A535D9");
  //         gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
  //         return gradient;
  //       },
  //       borderColor: "#AA14F0",
  //       pointBackgroundColor: '#fff',
  //       borderWidth: 2,
  //       pointRadius: 5,
  //       tension: 0,
  //     }
  //   ]
  // })
  function formatNumber(value) {
  if (value >= 1e12) return (value / 1e12) + 'T';
  if (value >= 1e9) return (value / 1e9) + 'B';
  if (value >= 1e6) return (value / 1e6) + 'M';
  if (value >= 1e3) return (value / 1e3) + 'k';
  return value;
}


  const options_Line1 = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {   // Enable tooltips
        enabled: true,
        mode: 'index', // Display tooltips for each data point
        intersect: false,
        callbacks: {
          label: function(tooltipItem) {
            return formatNumber(tooltipItem.raw);
          }
        } // Allow tooltips to appear even when not directly over the point
      }
    },

    scales: {
      x: {
        grid: {
          display: false,
          barPercentage: 1,
          borderColor: '#30374B',
        },
        ticks: {
          font: {
            size: 16,
            weight: 500,
            color: "#fff",
          }
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function(value) {
            return formatNumber(value);
          }
        }
      },
    },
  };


  // // chart_line 2
  // const [linedata2] = useState({
  //   labels: ["Jan1","Jan2","Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8"],
  //   datasets: [
  //     {
  //       label: "First dataset",
  //       data: [1000000000000000, 900000000000000, 850000000000000, 800000000000000,
  //         780000000000000, 750000000000000, 730000000000000, 710000000000000],
  //       fill: "start",
  //       backgroundColor: (context: ScriptableContext<line>) => {
  //         const ctx = context.chart.ctx;
  //         const gradient = ctx.createLinearGradient(30, 0, 0, 250);
  //         gradient.addColorStop(0, "#A535D9");
  //         gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
  //         return gradient;
  //       },
  //       borderColor: "#AA14F0",
  //       pointBackgroundColor: '#fff',
  //       borderWidth: 2,
  //       pointRadius: 5,
  //       tension: 0,
  //     }
  //   ]
  // })

  const options_Line2 = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {   // Enable tooltips
        enabled: true,
        mode: 'index', // Display tooltips for each data point
        intersect: false ,
        callbacks: {
          label: function(tooltipItem) {
            return formatNumber(tooltipItem.raw);
          }
        } // Allow tooltips to appear even when not directly over the point
      }
    },

    scales: {
      x: {
        grid: {
          display: false,
          barPercentage: 1,
          borderColor: '#30374B',
        },
        ticks: {
          font: {
            size: 16,
            weight: 500,
            color: "#fff",
          }
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function(value) {
            return formatNumber(value);
          }
        },
      },
    },
  };

  // const [linedata3] = useState({
  //   labels: ["Jan1","Jan2","Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8"],
  //   datasets: [
  //     {
  //       label: "First dataset",
  //       data: [12, 12.2, 12.4, 12.5, 
  //         13, 12, 11, 12,
  //          13, 14],
        // fill: "start",
        // backgroundColor: (context: ScriptableContext<line>) => {
        //   const ctx = context.chart.ctx;
        //   const gradient = ctx.createLinearGradient(30, 0, 0, 250);
        //   gradient.addColorStop(0, "#A535D9");
        //   gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
        //   return gradient;
        // },
        // borderColor: "#AA14F0",
        // pointBackgroundColor: '#fff',
        // borderWidth: 2,
        // pointRadius: 5,
        // tension: 0,
  //     }
  //   ]
  // })

  // const options_Line3 = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       display: false
  //     },
  //     tooltip: {   // Enable tooltips
  //       enabled: true,
  //       mode: 'index', // Display tooltips for each data point
  //       intersect: false // Allow tooltips to appear even when not directly over the point
  //     }
  //   },

  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //         barPercentage: 1,
  //         borderColor: '#30374B',
  //       },
  //       ticks: {
  //         font: {
  //           size: 16,
  //           weight: 500,
  //           color: "#fff",
  //         }
  //       },
  //     },
  //     y: {
  //       display: false,
  //       gridLines: {
  //         display: false,
  //       },
  //     },
  //   },
  // };

  const options_Line3 = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          title: function(tooltipItems) {
            return tooltipItems[0].label;
          },
          label: function(tooltipItem) {
            // Customize label to display raw data without formatting
            return tooltipItem.raw.toFixed(18); // Use a high precision to display raw value
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          barPercentage: 1,
          borderColor: '#30374B',
        },
        ticks: {
          font: {
            size: 16,
            weight: 500,
            color: "#fff",
          }
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
  };
  

    // chart_line 1
    // const [linedata] = useState({
    //   labels: ["Jan1","Jan2","Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8"],
    //   datasets: [
    //     {
    //       label: "First dataset",
    //       data: [11, 13, 15, 18, 16, 14, 15, 15],
    //       fill: "start",
    //       backgroundColor: (context: ScriptableContext <line>) => {
    //         const ctx = context.chart.ctx;
    //         const gradient = ctx.createLinearGradient(30, 0, 0, 250);
    //         gradient.addColorStop(0, "#A535D9");
    //         gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
    //         return gradient;
    //       },
    //       borderColor: "#AA14F0",
    //       borderWidth: 2,
    //       pointRadius: 0,
    //       tension: 0.5,
    //     }
    //   ]
    // })
  
    const options_Line = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            barPercentage: 1,
            borderColor: '#30374B',
          },
          ticks: {
            font: {
              size: 16,
              weight: 500,
              color: "#fff",
            }
          },
        },
        y: {
          display: false,
          gridLines: {
            display: false,
          },
        },
      },
    };

    useEffect(() => {
      setLinedata1(prevState => ({
        ...prevState,
        labels: xdata,
        datasets: [
          {
            ...prevState.datasets[0],
            data: ydata, 
            fill: "start",
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(30, 0, 0, 250);
              gradient.addColorStop(0, "#A535D9");
              gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
              return gradient;
            },
            borderColor: "#AA14F0",
            pointBackgroundColor: '#fff',
            borderWidth: 2,
            pointRadius: 5,
            tension: 0,
          }
        ]
      }));
      setLinedata2(prevState => ({
        ...prevState,
        labels: xdata,
        datasets: [
          {
            ...prevState.datasets[0],
            data: zdata,
            fill: "start",
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(30, 0, 0, 250);
              gradient.addColorStop(0, "#A535D9");
              gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
              return gradient;
            },
            borderColor: "#AA14F0",
            pointBackgroundColor: '#fff',
            borderWidth: 2,
            pointRadius: 5,
            tension: 0,
          }
        ]
      }));
      setLinedata3(prevState => ({
        ...prevState,
        labels: xdata,
        datasets: [
          {
            ...prevState.datasets[0],
            data: adata && adata.map(item => parseFloat(item)),
            fill: "start",
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(30, 0, 0, 250);
              gradient.addColorStop(0, "#A535D9");
              gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
              return gradient;
            },
            borderColor: "#AA14F0",
            pointBackgroundColor: '#fff',
            borderWidth: 2,
            pointRadius: 5,
            tension: 0,
          }
        ]
      }));
      setDoughnutData(prevState => ({
        ...prevState,
        labels: ["",""],
        datasets: [
          {
            ...prevState.datasets[0],
            data: [totalBurn? (100 - ((totalBurn/totalSupply)*100)) : 90 ,totalBurn? ((totalBurn/totalSupply)*100) : 10],
            backgroundColor: ['#AA14F0',"white"],
            hoverBackgroundColor: [ '#AA14F0',"white"],
          }
        ]
      }))
    }, [xdata, ydata, zdata, adata, totalSupply, totalBurn]);
  


    
    const optionsDoughnut = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            // Custom labels for legend
            generateLabels: function(chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map((label, index) => {
                  // Custom text for legend labels
                  const labelText = index === 0 ? 'User Holdings' : 'Burned';
                  const dataset = data.datasets[0];
                  const backgroundColor = dataset.backgroundColor[index];
                  return {
                    text: labelText,
                    fillStyle: backgroundColor,
                    index: index,
                    // CSS styling for the legend labels
                    fontStyle: 'bold', // Example styling
                    fontSize: 14, // Example styling
                    fontColor: '#FFF' // Example styling
                  };
                });
              }
              return [];
            }
          }
        }
      }
    };
    
    
    

  useEffect( () => {
    recordUserVisits(address, "Dashboard");
  }, []);

  const fetchfirst = async() =>{
    if(isConnected)
    {
        let { secondsleft, secondsLeftInText, timePercentage } = await getTimeLeftForJoker(address);
        setSecondsLeftState(secondsleft);
        setSecondsLeftInTextState(secondsLeftInText);
        setTimePercentageState(timePercentage);
    }
    else{
        setSecondsLeftState("");
        setSecondsLeftInTextState("");
        setTimePercentageState("");    
    }
  }

  useEffect(()=>{ fetchfirst(); },[isConnected])

  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
        // Fetch data from Firebase
        const { labels, data, data1, data2 } = await getDashBoardDetails();
        
        // Update state with fetched data
        setxdata(labels);
        setydata(data);
        setzdata(data1);
        setadata(data2);
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
      fetchData();
  }, []);
  
  // Define chardata1 state with initial empty values
  const [linedata1, setLinedata1] = useState({
    labels: [],
    datasets: [
      {
        label: 'Marketcap',
        data: [],
        fill: "start",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0,
      }
    ]
  });

   // Define chardata1 state with initial empty values
   const [linedata2, setLinedata2] = useState({
    labels: [],
    datasets: [
      {
        label: 'Circulating Supply',
        data: [],
        fill: "start",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0,
      }
    ]
  });

   // Define chardata1 state with initial empty values
   const [linedata3, setLinedata3] = useState({
    labels: [],
    datasets: [
      {
        label: 'Floor Price',
        data: [],
        fill: "start",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0,
      }
    ]
  });
  
  // Update chardata1 state when xdata and ydata change

//     const chartData = {
//         labels: processData(data).map(entry => entry.date),
//         datasets: [
//             {
//                 label: 'Circulating Supply',
//                 data: processData(data).map(entry => entry.circulatingSupply),
//                 fill: "start",
//           backgroundColor: (context: ScriptableContext <line>) => {
//             const ctx = context.chart.ctx;
//             const gradient = ctx.createLinearGradient(30, 0, 0, 250);
//             gradient.addColorStop(0, "#A535D9");
//             gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
//             return gradient;
//           },
//           borderColor: "#AA14F0",
//           borderWidth: 2,
//           pointRadius: 0,
//           tension: 0.5,
//             },
//             {
//                 label: 'Floor Price',
//                 data: processData(data).map(entry => entry.floorPrice),
//                 fill: "start",
//           backgroundColor: (context: ScriptableContext <line>) => {
//             const ctx = context.chart.ctx;
//             const gradient = ctx.createLinearGradient(30, 0, 0, 250);
//             gradient.addColorStop(0, "#A535D9");
//             gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
//             return gradient;
//           },
//           borderColor: "#AA14F0",
//           borderWidth: 2,
//           pointRadius: 0,
//           tension: 0.5,
//             },
//             {
//                 label: 'Price',
//                 data: processData(data).map(entry => entry.price),
//                 fill: "start",
//           backgroundColor: (context: ScriptableContext <line>) => {
//             const ctx = context.chart.ctx;
//             const gradient = ctx.createLinearGradient(30, 0, 0, 250);
//             gradient.addColorStop(0, "#A535D9");
//             gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
//             return gradient;
//           },
//           borderColor: "#AA14F0",
//           borderWidth: 2,
//           pointRadius: 0,
//           tension: 0.5,
//             }
//         ]
//     };
const gradient = 'linear-gradient(120.79deg, #AA14F0 21.21%, #29ABE2 98.71%)';


  return (
    <>
      <div className='Dashboard_main_wrapper'>
      <div className='Pool_Page_main swap_page_main'>
                    <PageFilter1 />
     
        <div className='app_page '>
          <h2 className='Dashboard_heading'>
            {/* ME Collateral */}
            <center>
              Coming Soon
            </center>
            </h2>
          <div className='chart_row'>
            <div className='chart_items'>
              <div className='chart_1'>
              <center><h4 style={{fontSize:'1.15rem', color: '#FFFFFF'}}>
            Marketcap
            </h4></center><br/>
                <div style={{'background': 'rgba(36, 72, 101, 0.1)'}} className='p-md-4'>
                  <Line data={linedata1} options={options_Line1} id="chart"></Line>
                </div>
              </div>
              <div className='chart_2'>
              <center> <h4 style={{fontSize:'1.15rem', color: '#FFFFFF'}}>
            Circulating Supply
            </h4></center><br/>
                <div style={{'background': 'rgba(36, 72, 101, 0.1)'}} className='p-md-4'>
                  <Line data={linedata2} options={options_Line2} id="chart"></Line>
                </div>
              </div>
            </div>
          </div>
          <div className='chart_row'>
            <div className='chart_items'>
              <div className='chart_1' >
              <center><h4 style={{fontSize:'1.15rem', color: '#FFFFFF'}}>
            Floor Price
            </h4></center><br/>
                <div style={{'background': 'rgba(36, 72, 101, 0.1)'}} className='p-md-4'>
                  <Line data={linedata3} options={options_Line3} id="chart"></Line>
                </div>
              </div>
              <div className='chart_2'><center><h4 style={{paddingLeft:"30px",fontSize:'1.15rem', color: '#FFFFFF' }}>
            UserHoldings Vs Burned
            </h4></center><br/>
                {/* <div className='line_block'>
                  <Line data={linedata2} options={options_Line2} id="chart"></Line>
                </div> */}
                 <div style={{'background': 'rgba(36, 72, 101, 0.1)'}} className='p-md-4'>
                 <center><div className='doughnut-container m-3' style={{ maxWidth: '330px', margin: 'auto', width: '100%'}}>
                    <Doughnut data={doughnutData} options={optionsDoughnut} id="doughnut-chart"></Doughnut>
                  </div></center>
                </div>
              </div>
            </div>
          </div>
        
                        
                      
                       
          {/* <div className='top_tokens_block'>
            <div className='top_tokens_heading'>
              <h2 className='Dashboard_heading'>Top Tokens</h2>
            </div>
            <div className='apptable_block'>
              <AppTable />
              <div className='table_arrow'>
                <div className='hover_arrow'>
                  <img src={l_tabel_arrow} alt="" />
                  <img src={l_tabel_arrow_hover} alt="" />
                </div>
                <span>Page 1 of 1</span>
                <div className='hover_arrow'>
                  <img src={r_tabel_arrow} alt="" />
                  <img src={r_tabel_arrow_hover} alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;