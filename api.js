function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            
        },
        mode:"cors"
    };

    if(body !==null){
    options.body=JSON.stringify(body);
    }

    return fetch(url,options);
}


//getAllCArs


async function getAllCars(){


    let data = await api("masini",'GET');


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


async function updateCar(car){


    
    let data=await api(`update`,'PUT',car);


    return data;
}

async function sortByPrice(){

    let data=await api(`sortByPrice`,'GET');
    
    data=await data.json();

    console.log(data);
    return data;
}


async function sortByColor(){
    let data=await api(`sortByColor`,'GET');

    data=await data.json();

    console.log(data);

    return data;
}

async function sortByMarca(){
    let data=await api(`sortByMarca`,'GET');
    data=await data.json();

    return data;
}

async function sortByModel(){

    let data=await api(`sortByModel`,'Get');

    data =await data.json();
    return data;

}

async function sortByNrDeLocuri(){

    let data=await api(`sortByNrDeLocuri`,'Get');

    data =await data.json();
    
    return data;

}

