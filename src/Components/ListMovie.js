import CardMovie from "./CardMovie"

const ListMovie=({movies})=>{



    return(
        <div className="centerDiv">
            {
                movies.map((el,i,t)=> <CardMovie el={el}/>)
            }

        </div>
    )

}

export default ListMovie