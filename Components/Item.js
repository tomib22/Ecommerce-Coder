const Item=({id,name,img,price,stock}) =>
return (
<article classname="CardItem">
<header classname="Header">
    <h2 classname="Itemheader">
{name}

    </h2>
</header>
<picture>  
<img src={img} alt={name}  classname="Itemimg"/>
</picture>
<section>
    
</section>
</article>



)




}