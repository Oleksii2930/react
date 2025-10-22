import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
   const [query, setQuery] =  useSearchParams({pg:'100500'});

    return (
        <div>
<button onClick={() => {
   const pg = query.get('pg');
   if(pg){
       let currentPage = +pg;
       currentPage++;
       setQuery({pg:currentPage.toString()})
   }
}}>next</button>
<button onClick={() => {
    const pg = query.get('pg');
    if(pg){
        let currentPage = +pg;
        currentPage--;
        setQuery({pg:currentPage.toString()})
    }
}}>prev</button>
        </div>
    );
};

export default PaginationComponent;