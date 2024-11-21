import React, { useState, useEffect, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import usdc_1 from '../assets/images/Dashboard/usdc_1.svg';
import usdc_2 from '../assets/images/Dashboard/usdc_2.svg';
import usdc_3 from '../assets/images/Dashboard/usdc_3.svg';
import mer_dai_icon from '../assets/images/Dashboard/mer_dai_icon.svg';
import { liabilitycal, pooladdress, poolassetbalance, poollpbalance } from '../config';


const columns = [
    // { id: 'name', label: '#' , minWidth: 150},
    { id: 'code', label: 'Token Name', minWidth: 150},
    { id: 'code1', label: 'Total Value Locked ' },
    { id: 'population', label: 'Volume'},
    { id: 'size', label: 'Coverage Ratio',minWidth: 160},
];

function createData(name, code, code1, population, size) {
    const density = population / size;
    return { name, code, code1, population, size, density };
}








export default function AppTable() {
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(10);
    const [avalue, setavalue] = useState("");
    const [bvalue, setbvalue] = useState("");
    const [cvalue, setcvalue] = useState("");
    const [alp, setalp] = useState("");
    const [blp, setblp] = useState("");
    const [clp, setclp] = useState("");
    const [aliability, setaliability] = useState("");
    const [bliability, setbliability] = useState("");

    const [cliability, setcliability] = useState("");

    function formatter(number){
        try{
          const formattedNumber = Number(
            number.toString().match(/^\d+(?:\.\d{0,3})?/)
          )
          let s = number.toString().match(/^\d+(?:\.\d{0,3})?/);
          // console.log("formatted",s)
    
          return s[0];
        }catch(err){
          return 0;
        }
        
  }
    const rows = [
        createData(1,
            <div className='usde_row'>
                <img src={usdc_1} alt="usdc_1" />
                &nbsp;  <div className='usde_text'>
                    <h5> USDC </h5>
                    <span> USDC</span>
                </div>
            </div> 
            , avalue?"$"+ formatter(avalue/100000000):'0', 
            alp?"$"+ parseFloat(Math.abs((parseInt(alp)+parseInt(avalue))/100000000)).toFixed(3):"0.0", 
            aliability?formatter(Math.abs((parseInt(avalue)/parseInt(aliability)))):"0.0"
              ),
        createData(2,
            <div className='usde_row'>
                <img src={usdc_3} alt="usdc" />
                &nbsp; <div className='usde_text'>
                    <h5> USDT </h5>
                    <span>USDT</span>
                </div>
            </div>
            , bvalue?"$"+ formatter(bvalue/100000000):'0', 
            blp?"$"+ parseFloat(Math.abs((parseInt(blp)+parseInt(bvalue))/100000000)).toFixed(3):"0.0",
            bliability?formatter(Math.abs((parseInt(bvalue)/parseInt(bliability)))):"0.0"
            ),
        createData(3,
            <div className='usde_row'> 
               &nbsp; <img src={mer_dai_icon} width="30" height="30" alt="usdc_1" />
               &nbsp; <div className='usde_text'>
                    <h5>DAI</h5>
                    <span>DAI </span>
                </div>
            </div>
            , cvalue?"$"+ formatter(cvalue/100000000):'0', 
            clp?"$"+ parseFloat(Math.abs((parseInt(clp)+parseInt(cvalue))/100000000)).toFixed(3):"0.0" ,
            cliability?formatter(Math.abs((parseInt(cvalue)/parseInt(cliability)))):"0.0"
             ),
    ];
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async() => {
    let a1 = await poolassetbalance(localStorage.getItem("walletAddress"),pooladdress,"USDC")
    let b1 = await poolassetbalance(localStorage.getItem("walletAddress"),pooladdress,"USDT")
    let c1 = await poolassetbalance(localStorage.getItem("walletAddress"),pooladdress,"DAI")
    setavalue(a1)
    setbvalue(b1)
    setcvalue(c1)
    
    let f = await poollpbalance("USDC")
    let f1 = await poollpbalance("USDT")
    let f2 = await poollpbalance("DAI")
    setalp(f)
    setblp(f1)
    setclp(f2)

    let e = await liabilitycal("USDC")
    let e1 = await liabilitycal("USDT")
    let e2 = await liabilitycal("DAI")
    setaliability(e)
    setbliability(e1)
    setcliability(e2)
   
}

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}


