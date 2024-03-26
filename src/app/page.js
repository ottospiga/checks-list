'use client'
import React, {useState, useEffect, useRef} from 'react';
import { Box, Button, Card, Divider, Grid, Typography, } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import AppBarAplication from '@/components/AppBarAplication';
import api from '@/utils/api';

const data = [
  {
    "_highlights": [
      {
        "to": "a@ru"
      }
    ],
    "_id": "433d3b8f-9422-491c-a369-ea4ff69f8287",
    "_score": 0.6842976909566281,
    "body": "\u041c\u044b \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u0432\u0430\u0441 \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043d\u0430\u0448\u0438\u0445 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u043d\u0430\u0447\u0438\u043d\u0430\u043d\u0438\u044f\u0445. \u041d\u0430\u0448\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0437\u0430\u0432\u043e\u0435\u0432\u0430\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043d\u0438\u0435 \u0443 \u043c\u0438\u0440\u043e\u0432\u044b\u0445 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432.\u0411\u0443\u0434\u044c\u0442\u0435 \u0441\u0440\u0435\u0434\u0438 \u043d\u0430\u0448\u0438\u0445 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043b\u0438\u0434\u0435\u0440\u043e\u0432! \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0438\u043c\u0435\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435.",
    "date": "Sun, 10 Sep 2023 20:31:55 -0700 (CEST)",
    "from": "=?utf-8?B?0JrQuNGA0LjRh9C10L3QutC+INCi0LDRgtGM0Y/QvdCwINCV0LLQs9C1?=\t=?utf-8?B?0L3RjNC10LLQvdCw?= <info@fortishop.be>",
    "index_ts": "2024-03-13T23:01:13.653966+00:00",
    "sample_hash": "9ff8df6d1f6a59ff2d72ed42f8f0bbf8f8169cbd92e2736a23408bf3ea5c5d68",
    "subject": "=?utf-8?B?0JzRiyDQvdC1INGB0LzQvtCz0LvQuCDQstCw0Lwg0L/QtdGA0LXQtNCw?=\t=?utf-8?B?0YLRjCDQv9GA0LjQs9C70LDRiNC10L3QuNC1LCDQvdC+INGB0LXQudGH?=\t=?utf-8?B?0LDRgSDQtdCz0L4g0LLRi9GB0YvQu9Cw0LXQvC4=?=",
    "to": "a@ru",
    "unique_domains": "fortishop.be",
    "unique_emails": "info@fortishop.be",
    "unique_ips": "",
    "unique_urls": ""
  },
  {
    "_highlights": [
      {
        "body": " "
      }
    ],
    "_id": "ee3dbb36-f3cd-41f2-b95d-4823aa752619",
    "_score": 0.6311065071400214,
    "body": "",
    "date": "15 Aug 2023 04:20:49 +0200",
    "from": "gracepak.com  <92a5f001@8bf308a.com>",
    "index_ts": "2024-03-13T23:02:07.360540+00:00",
    "sample_hash": "f50c769617efe8c6c3681f0d9c4abca344af9bc06a1db0a39e98d422f8ba8d19",
    "subject": "Action Required: gracepak.com Blocking Request",
    "to": "b9700f@f1277c82.com",
    "unique_domains": "8bf308a.com, f1277c82.com, gracepak.com",
    "unique_emails": "92a5f001@8bf308a.com, b9700f@f1277c82.com",
    "unique_ips": "",
    "unique_urls": ""
  },
  {
    "_highlights": [
      {
        "body": " "
      }
    ],
    "_id": "62dcef54-4d46-480d-a476-6ab6ccad9ef7",
    "_score": 0.6311065071400214,
    "body": "",
    "date": "Wed, 19 Oct 2022 13:43:32 +0000",
    "from": "Jcpenney <janetclark@hire-technology.com>",
    "index_ts": "2024-03-14T16:53:58.692110+00:00",
    "sample_hash": "1538feb73e402ae91f4bb663d90a0475305aa84b9318e6db88d1fc670c7f30ec",
    "subject": "Voice Transcript Received on October 19, 2022",
    "to": "Jennifer L Sobczak <jsobczak@jcp.com>",
    "unique_domains": "hire-technology.com, jcp.com",
    "unique_emails": "jsobczak@jcp.com, janetclark@hire-technology.com",
    "unique_ips": "",
    "unique_urls": ""
  },
  {
    "_highlights": [
      {
        "body": " "
      }
    ],
    "_id": "55461979-3d05-48a5-893c-6fb82639eba1",
    "_score": 0.6311065071400214,
    "body": "",
    "date": "22 Nov 2022 13:24:20 +0100",
    "from": "50a9c7dbf@88791a.id",
    "index_ts": "2024-03-14T16:54:02.020605+00:00",
    "sample_hash": "f9c0fa57773fd79dffb5a544a8625776c2acd6385b06a178e2c728ca710507c6",
    "subject": "New PO 72955",
    "to": "1a6e6c@439e117b53.com",
    "unique_domains": "439e117b53.com, 88791a.id",
    "unique_emails": "1a6e6c@439e117b53.com, 50a9c7dbf@88791a.id",
    "unique_ips": "",
    "unique_urls": ""
  },
  {
    "_highlights": [
      {
        "body": " "
      }
    ],
    "_id": "7362cd7c-dc81-4e91-addd-35111c4c1997",
    "_score": 0.6311065071400214,
    "body": "",
    "date": "Mon, 30 Oct 2023 11:05:04 -0700",
    "from": "Prime's Membership <donot_reply-edeliverymessg_infodaily3788@theoutsourcingdevs.com>",
    "index_ts": "2024-03-14T16:55:30.284004+00:00",
    "sample_hash": "621b0585155765854dbdd8f226c2dd936df7076e253a78953fa6fe155024be9c",
    "subject": "Re: [News Alert] account security, your amazon order declined. on Mon, October 30, 2023  11:04 AM - ID932348934",
    "to": "updatelocalshared251934416@hotmail.com",
    "unique_domains": "theoutsourcingdevs.com, hotmail.com",
    "unique_emails": "updatelocalshared251934416@hotmail.com, donot_reply-edeliverymessg_infodaily3788@theoutsourcingdevs.com",
    "unique_ips": "",
    "unique_urls": ""
  }
]

const columnsItems = [
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'from', headerName: 'From', width: 200 },
  { field: 'subject', headerName: 'Subject', width: 450 },
  // { field: 'MaterialShortText', headerName: 'Descrição', width: 130 },
  // { field: 'Quantity', headerName: 'Qde confirmada', width: 85 },
  // { field: 'Quantity', headerName: 'Qde confirmada', width: 85 },
  // {
  //   field: 'ItemStatus',
  //   headerName: 'Data entrega planejada',
  //   width: 80,
  //   valueGetter: (params) => params?.row?.ScheduleLineList?.ScheduleLine?.DeliveryDate
  // },
]

export default function Home() {
  const searchTextRef = useRef('');
  // const [data, setData] = useState([]);

  const handleSendButtonClick = () => {
    console.log('Typed text:', searchTextRef.current.value);
  };

  useEffect(() => {
    // api.get('/clientes')
    //   .then((res) => { 
      // console.log(res);
      // setData(res?.data); 
    // } );
  }, []);
  
  return (
    <>
      <AppBarAplication />

      <Grid sx={{ flexGrow: 1, justifyContent:'center', }} container spacing={2} >
      
        <Grid item xs={10} md={10} sx={{ mt:2, alignItems: 'center', }} >
          <Typography variant="h2" sx={{ my:2 }}> Checks-list </Typography>
          
          <Box sx={{display:'flex', }}>
            <TextField 
              fullWidth 
              label="Type here to search" 
              variant="outlined" 
              inputRef={searchTextRef}
              />
            <Button
              sx={{ml:3}}
              variant="contained" 
              onClick={handleSendButtonClick}
              > Send </Button>
          </Box>
        
          <DataGrid
            sx={{
              mt:6,
              // backgroundColor: '#FFFFFF'
              // borderStyle:'none',
              // borderTop:'none',
              // borderLeft:'none',
              // borderRight:'none',
              // borderBottom:'none'
            }}

            autoHeight
            rows={ data }
            columns={columnsItems}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 15 },
              },
              toolbar: {
                showQuickFilter: true,
              },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                printOptions: { disableToolbarButton: true },
                csvOptions: { disableToolbarButton: true },

              }
            }}
            pageSizeOptions={[5, 10, 15, 20]}
            checkboxSelection
            getRowId={(row) => row?.date}
            // onRowSelectionModelChange={(newRowSelectionModel) => {
            //   const selectedIDs = new Set(newRowSelectionModel);
            //   const selectedRowData = itensFromOrder.filter( (data) => selectedIDs.has(data.Item) );

            //   //console.log(selectedRowData);
            //   //console.log(selectedRowData?.map((e) => e?.Item ));
            //   //setItensSelecionados(selectedRowData?.map((e) => e?.Item ))
            //   setItensSelecionados(selectedRowData)
            // }}
          />
        
        </Grid>

      </Grid>
    </>
  );
}
