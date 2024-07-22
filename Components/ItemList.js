import './itemlist.css'


Const ItemList=({products}) => {
return(
   <div classname="Listgroup">
    {products.map(prod => <Item key={prod.id}{...prod}/>)}
   </div>
)

}
export default ItemList