function createRow(car){

   
    let tr=document.createElement("tr");


    tr.innerHTML=`
    <td>${car.id}</td>
    <td>${car.marca}</td>
    <td>${car.model}</td>
    <td>${car.culoare}</td>
    <td>${car.nrDeLocuri}</td>
    <td>${car.pret}</td
    
    `
    console.log(car.nrDeLocuri);
    console.log(car.model);

    return tr;
  
}

function attachRows(arr){
    let container=document.querySelector(".container");
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
       // console.log(arr[i]);
    }
}
