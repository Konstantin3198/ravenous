export default function sortBy(array:any[],sortMethod:string){
    if(sortMethod==='highest_rated'){
        return array.sort((a,b)=>b.rating-a.rating);
    }
    if(sortMethod==='most_reviewed'){
        return array.sort((a,b)=>b.review_count-a.review_count);
    }
    return array;
}