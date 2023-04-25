import ItemCard from "./ItemCard"

const ItemList = ({ items }) =>{
    return(
        <div 
        style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "space-evenly"
                }}
        >
            {
            items.map((elem)=>{
                return  (
                     <ItemCard elem = {elem} key={elem.id}/>
                )
            })
            }

        </div>
    )
}
export default ItemList