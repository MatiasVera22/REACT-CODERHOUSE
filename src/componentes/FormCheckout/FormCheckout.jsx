import { Grid, TextField, Button } from '@mui/material'
import React from 'react'


const FormCheckout = ({handleChange,handleSubmit,errors}) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} m={2} flex justifyContent={'center'}>

          <Grid item xs={11} sm={7}>
              <TextField helperText={errors.nombre} error={errors.nombre ? true : false} name='nombre' id="outlined-basic" label="Outlined" variant="outlined" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={11} sm={7}>
              <TextField helperText={errors.email} error={errors.email ? true : false} name='email' id="outlined-basic" label="Outlined" variant="outlined" fullWidth onChange={handleChange}/>
          </Grid>
          <Grid item xs={11} sm={7}>
              <TextField helperText={errors.password} error={errors.password ? true : false} name='password' id="outlined-basic" label="Outlined" variant="outlined" fullWidth onChange={handleChange}/>
          </Grid>
        </Grid>
        <div style={{justifyContent:"center", display:'flex'}}>
          <Button type='submit' variant='contained'>Terminar</Button>
        </div>
        
      
      </form>
    </div>
  )
}

export default FormCheckout