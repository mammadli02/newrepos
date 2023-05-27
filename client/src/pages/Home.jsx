import React, { useEffect, useState } from 'react'
import { GETAll } from '../api/request'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Helmet } from 'react-helmet';
const Home = () => {
    const [cards, setCards]=useState([])
    useEffect(()=>{
        GETAll().then((res)=>{
            setCards(res)
        })
    }, [])
    function handleSearch(e){
GETAll(e.target.value).then((res)=>{
  console.log(res);
  setCards(res)
})
    }
  return (

    <>
    
<Helmet>
               
               <title>Home page</title>
           </Helmet>
    <TextField onChange={(e)=>handleSearch(e)}
label="search"
id="outlined-basic" variant="outlined"
  />
    <Button variant="contained"
onClick={()=>{
  let sorted=[...cards.sort((a,b)=>a.name.localeCompare(b.name))]
  setCards(sorted)
}}
>Sorted </Button>
<Container maxWidth="lg">
<Grid container spacing={3}>
{
cards && cards.map((card)=>{
    return(
<Grid key={card.id} item lg={3} md={6} sm={12}>
<Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={card.imageURL}/>}



  >

    <Typography>
        <Link to={`/cards/${card._id}`}>{card.name}</Link>
    </Typography>
    <Typography>
      {card.parag}
    </Typography>
  </Card>

</Grid>

    )
})


}      
</Grid>
</Container>

</>
    
    
    
    
    
    
    
  )
}

export default Home