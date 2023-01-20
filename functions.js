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
   
    return tr;
  
}

function attachRows(arr){
    let container=document.querySelector(".container");
    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
       // console.log(arr[i]);
    }
}

function  returnMarcile(arr){
    let arrNou;
    for(let i=0;i<arr.length;i++){
        arrNou.appendChild(arr[i].marca);
    }
    return arrNou;
}

 function returnMasina(data,marca){
    for(let i=0;i<data.length;i++){
        if(data[i].marca==marca){
            return data[i].marca;
        }

    }
    return -1;
 }
 

 //marci= array
 function createOptions(marci){
    let marcile=document.querySelector(".marci");
    for(let i=0;i<marci.length;i++){
      let option=document.createElement('option')

      option.value=marci[i];
      option.textContent=marci[i];
      marcile.appendChild(option);
    }
  }


