const options={
    method:'GET',
    headers:{
        accept:'application/json',
        authorization:'Bearer BowEieoz5YCTyNNQ7bEOHoZuK9rDBPqrc_vfzVmzrHC1BNxelrtR3TrQWPjj3sw20RsvXNUYsY5QNzFYAynJHZUBNrwPf6g4VEsJneMiahDA1JLUdPYp1O3MI9CfZ3Yx'
    }
  }

export default async function fetchData(category:string,location:string){
  try{
    const data= await fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&categories=${category}&sort_by=best_match&limit=20`,options);
    if(data.status===200){
      const jsonData= await data.json();
      return jsonData;
    } else{
      const Error= await data.json();
      return Error;
    }
  }
  catch(error){
    console.log(error);
  }
}
