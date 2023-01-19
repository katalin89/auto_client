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

/*function api(path,method,body=null){
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
}*/
