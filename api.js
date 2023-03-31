function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/masina/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            
        },

      
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
/////nu este data un json

async function addCar(car){

    let data= await api("add",'POST',car);

    return data;
  }

async function getAllMarci(){

    let data= await api("masini/marci",'GET');//in functia api avem http://localhost:8080/api/v1/"+path aici completam pathul mai departe de la endpoint:masini/marci

    data=await data.json();

   
    return data;
}



//
 async function deleteCar(carId){
    let data=await api(`delete/${carId}`,'DELETE');
 }

 async function deleteCarByModel(model){
    let data=await api(`deleteByModel/${model}`,'DELETE');
 }



async function updateCar(car){


    
    let data=await api(`update`,'PUT',car);


    return data;
}


async function sortByMarca(){

    let data=await api(`sortByMarca`,'GET');

    data=await data.json();

    return data;
}

async function sortByModel(){
    let data=await api(`sortByModel`,'GET');

    data = await data.json(data);

    return data;
}

async function sortByCuloare(){
     let data=await api(`sortByColor`,'GET')

     data=await data.json();

     return data;
}

async function sortByNrDeLocuri(){
    let data=await api(`sortByNrDeLoc`,'GET');

    data=await data.json();

    return data;
}

async function sortByPret(){
    
    let data=await api(`sortByPrice`,'GET');

     data=await  data.json();

     return data;


}

