import { Card,CardMedia,CardContent,Typography,CardActions,Button } from "@mui/material"
import { Link } from "react-router-dom"

const ItemCard = ({elem})=>{
    return(
        <Card sx={{ maxWidth: 345 }} key = {elem.id}>
        <CardMedia
            sx={{ height: 140 }}
            image={elem.img}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {elem.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {elem.description}
            </Typography>
            <Typography variant="body2" color="primary">
                {elem.price}
            </Typography>
        </CardContent>
        <CardActions style={{height: 100}}>
            <Link to={`/itemDetail/${elem.id}`}>
            <Button size="small">Ver detalle</Button>
            </Link>
            <Button size="small">Agregar al carrito</Button>
        </CardActions>
        </Card>
    )

}
export default ItemCard 