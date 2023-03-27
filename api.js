function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/masina/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            
        }

      
    };

    if(body !==null){
    options.body=JSON.stringify(body);
    }

    return fetch(url,options);
}


//getAllCArs


async function getAllCars(){



    let data = await api("all",'GET');


    data= await data.json();


    return data;
}

//functie care adauga o masina

async function addCar(car){

    let data= await api("add",'POST',car);

    return data.json();
  }

async function getAllMarci(){
    let data= await api("masini/marci",'GET');//in functia api avem http://localhost:8080/api/v1/"+path aici completam pathul mai departe de la endpoint:masini/marci

    data=await data.json();

   
    return data;
}

//masini/{marca}

async function getAllMasiniByMarca(marca){
    let data=await api(`masini/${marca}`,'GET');
    

    data=await data.json();

    console.log("data1:"+data);

    return data;
}

 async function deleteCar(carId){
    let data=await api(`delete/${carId}`,'DELETE');
 }

 /*async function getAllFilms(){
    let dataApi= await fetch("https://api.themoviedb.org/3/movie/popular?api_key=29c67b39adde33f44618a80626c264ec&language=en-US&page=1");   
    dataApi=await dataApi.json();
    console.log(dataApi);
    attachCards(dataApi.results,".films");
    data = dataApi.results;
}*/

async function updateCar(car){


    
    let data=await api(`update`,'PUT',car);


    return data;
}


