import { useNavigate, useParams } from "react-router-dom"
import CardMovie from "./CardMovie"
import AddMovie from "./AddMovie"
import FilterMovies from "./FilterMovie"
const ListMovie=({movies,search,njoum,setNjoum,setSearch,setMovies})=>{





    var x = movies.filter((el,i,t)=>el.title.toUpperCase().includes(search.toUpperCase())&& el.rating>=njoum)
// const {id} = useParams()
// const found = movies.find(movie =>movie.id== id)
// const navigate = useNavigate()


    return(
<>

<FilterMovies setSearch={setSearch} setNjoum={setNjoum} search ={search} njoum={njoum}/>
<AddMovie movies={movies} setMovies={setMovies}/>
        <div className="centerDiv">
            {


x.length == 0 ? <h1>NOT FOUND</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
                // movies.map((el,i,t)=> <CardMovie key={el.id} el={el}/>)
            }

        </div>
        </>
    )

}

export default ListMovie