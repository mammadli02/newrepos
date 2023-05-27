import React, { useEffect, useState } from 'react'
import { GetById } from '../api/request'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
const Detail = () => {
    const [card, setCard]=useState({})
    const {id} = useParams()
    useEffect(()=>{
        GetById(id).then((res)=>{
            setCard(res)
        })
    },[id])
  return (

    
<>


<Helmet>
               
                <title>Detail page</title>
            </Helmet>







<Container maxWidth="lg">
<Grid container spacing={3}>

<Grid key={card.id} item lg={3} md={6} sm={12}>
<Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={card.imageURL}/>}



  >

    <Typography>
    {card.name}
    </Typography>
    <Typography>
    {card.parag}
    </Typography>
  </Card>

</Grid>    
</Grid>
</Container></>


    
    
    
    
    
    
    
  )
}

export default Detail