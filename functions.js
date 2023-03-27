async function  attachHomePage(){
    let container=document.querySelector(".container");

     container.innerHTML=`   
    <h1>Cars</h1>
	<p><a class="button new-car">Create New Car</a></p>
  
	<table>
		<thead>
			<tr>
            <th  class="id">Id</th>
            <th class="culoare">Culoare</th>
			<th class="marca">Marca</th>
			<th class="model">Model</th>
			<th cass="nrDeLocuri">NrDeLocuri</th>
			<th class="pret">Pret</th>
				
			</tr>
		</thead>
		<tbody class=container-masini>
		
		</tbody>
	</table>
    `

    let data = await getAllCars();
    attachRows(data);



let btnNewCar=document.querySelector(".new-car");


btnNewCar.addEventListener("click",(e)=>{
                attachNewCarPage();
    });        

    let rowsContainer=document.querySelector(".container-masini");

    rowsContainer.addEventListener("click",(e)=>{

        console.log("ceca");        
     
        let data=e.target.parentNode;
        console.log(data);
        
        let carProperties= data.children;

       // car.id=carProperties[0].innerHTML;
       const car = {
        carId : carProperties[0].innerHTML,
        culoare : carProperties[1].innerHTML,
        marca : carProperties[2].innerHTML,
        model : carProperties[3].innerHTML,
        nrDeLocuri : carProperties[4].innerHTML,
        pret : carProperties[5].innerHTML     
    }

        attachUpdatePage(car);
    });

}

//cere valorile noi si face update,sare la pagina principala cu valoarea noua
function update(){

     let inp1=document.getElementById('culoare');
     let inp2=document.getElementById('marca');
     let inp3=document.getElementById('model');
     let inp4=document.getElementById('nrDeLocuri');
     let inp5=document.getElementById('pret');

    const car = {
        culoare : inp1.value,
        marca : inp2.value,
        model : inp3.value,
        nrDeLocuri : inp4.value,
        pret : inp5.value     
    }

    updateCar(car);
}

 async function attachUpdatePage(car){
    let container=document.querySelector(".container")

    //input type=hidden nu este visibil pe pagina, dar se poate citi valoarea lui.
    container.innerHTML=` <h1>Update car</h1> 
        <input name="carId" class="carId" type="hidden" value="${car.carId}"/>
        
        
        <ul class="error">
            
        </ul>

        <p>
            <label for="marca">marca</label>
            <input name="marca" type="text" class="marca" id="marca" value="${car.marca}"  disabled>
        </p>
        <p>
            <label for="model">Model</label>
            <input name="model" type="text" class="model" id="model" value="${car.model}">
        </p>
        <p>
            <label for="culoare">Culoare</label>
            <input name="culoare" type="text"  class="culoare" id="culoare" value="${car.culoare}">
        </p>
        <p>
            <label for="nrDeLocuri">Numar de locuri</label>
            <input name="nrDeLocuri" type="text" class="nrDeLocuri" id="nrDeLocuri" value="${car.nrDeLocuri}">
        </p>
        <p>
            <label for="pret">Pret</label>
            <input name="pret" type="text" class="pret" id="pret" value="${car.pret}">
        </p>
        <div>
            <button class="update">Update car</button>
            <button class="delete" >Delete car</button>
            <button class="cancel">Cancel</button>
        </div>
  `

  let btnCancel=document.querySelector(".cancel")
  btnCancel.addEventListener("click",()=>{
    attachHomePage();
  })

  let btnUpdate=document.querySelector(".update");
  btnUpdate.addEventListener("click",async()=>{


    let input1=document.querySelector(".marca");
    let input2=document.querySelector(".model");
    let input3=document.querySelector(".culoare");      
    let input4=document.querySelector(".nrDeLocuri");
    let input5=document.querySelector(".pret");

    let car={
        marca:input1.value,
        model:input2.value,
        culoare:input3.value,
        nrDeLocuri:input4.value,
        pret:input5.value
    };

    

    let erors=[];


    
    if(input2.value==""){
    
    erors.push("trebuie pusa modelul");
    

    input2.style.borderColor="red";

    }   

    if(input3.value==""){
        erors.push("trebuie pusa culoarea");

        input3.style.borderColor="red";
        
    }

    if(input4.value==0){
        erors.push("trebuie pus numarul de locuri");
        input4.style.borderColor="red";
    }else if(input4.value<0){
        erors.push("Numarul de locuri nu poate fi un numar negativ");
        input4.style.borderColor="red";
    }

    if(input5.value==0){
        erors.push("trebuie pus pretul");
        input5.style.borderColor="red";
    }

  
   
if (erors.length>0){
   
    let errorContainer=document.querySelector(".error");

    let h1=document.createElement("h1");
    h1.textContent="Ooops";
    errorContainer.appendChild(h1);


    for(let i=0;i<erors.length;i++){

        let li=document.createElement("li");

        li.textContent=erors[i];

        errorContainer.appendChild(li);
    }
}else {
    let errorContainer=document.querySelector(".error");

    errorContainer.innerHTML="";


}
if(erors.length==0){
   
    let data=await updateCar(car);
    attachHomePage();
}




  })

  let btnDelete=document.querySelector(".delete");

    btnDelete.addEventListener("click",async()=>{
        let input = document.querySelector(".carId");

        let carId=input.value;

        let data=await deleteCar(carId);

        attachHomePage();
    });
 }


 //sa navigheze pe  new car
function attachNewCarPage(){

    let container=document.querySelector(".container");
    container.innerHTML=`

    
    <h1>New Car</h1>

    <ul class="error">
            
    </ul>
        <p>
            <label for="year">Culoare</label>
            <input name="year" type="text" id="culoare" class="culoare">
        </p>
        <p>
            <label for="title">Marca</label>
            <input name="title" type="text" id="marca" class="marca">
        </p>
        <p>
            <label for="author">Model</label>
            <input name="author" type="text" id="model" class="model">
        </p>
        
        <p>
            <label for="year">NrDeLocuri</label>
            <input name="year" type="text"  class="nrDeLocuri" id="nrDeLocuri">
        </p>

        <p>
            <label for="year">pret</label>
            <input name="year" type="text" id="pret" class="pret">
        </p>

        <div class="butoane">
            <button class="add">Add new  Car</button>
            <button class="cancel">Cancel</button>
            </div
    `

    let btnCancel=document.querySelector(".cancel")
    btnCancel.addEventListener("click",()=>{
      attachHomePage();
    })

     let btnAddNewCar=document.querySelector(".add");
     let inp0=document.getElementById('carId');
     let inp1=document.getElementById('culoare');
     let inp2=document.getElementById('marca');
     let inp3=document.getElementById('model');
     let inp4=document.getElementById('nrDeLocuri');
     let inp5=document.getElementById('pret');

     btnAddNewCar.addEventListener("click", async ()=>{
        
    let inp1=document.querySelector(".culoare");
    let inp2=document.querySelector(".marca");
    let inp3=document.querySelector(".model");
    let inp4=document.querySelector(".nrDeLocuri");
    let inp5=document.querySelector(".pret");
        
        let car={
            culoare:inp1.value,
            marca:inp2.value,
            model:inp3.value,
            nrDeLocuri:inp4.value,
            pret:inp5.value,
        }
   
    let erors=[];
    if(inp1.value==""&& inp2.value==""&& inp3.value==""&& inp4.value==0 && inp5.value==0){
        erors.push(" Nu ati completat campurile ");
      
    }

    if(inp1.value==""){
        
        erors.push("trebuie pusa culoarea");
        

        inp1.style.borderColor="red";

        }   
        
        if(inp2.value==""){
        
        erors.push("trebuie pusa marca");
        

        inp2.style.borderColor="red";

        }   

        if(inp3.value==""){
            erors.push("trebuie pusa model");

            inp3.style.borderColor="red";
            
        }

        if(inp4.value==0){
            erors.push("trebuie pus numarul de locuri");
            inp4.style.borderColor="red";
        }

        if(inp5.value==0){
            erors.push("trebuie pus pretul");
            inp5.style.borderColor="red";
        }

        if (erors.length>0){
        
            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML="";
            let h1=document.createElement("h1");
            h1.textContent="Ooops";
            errorContainer.appendChild(h1);
            


            for(let i=0;i<erors.length;i++){

                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
            }
        } else {
           
           
         let data=await addCar(car);
         attachHomePage();
        }
    })

}


//create  row
function createRow(car){
 let tr=document.createElement("tr");

 tr.innerHTML=`
				<td>${car.id}</td>
                <th>${car.culoare}</th>
				<td>${car.marca}</td>
                <td>${car.model}</td>
				<td>${car.nrDeLocuri}</td>
				<td>${car.pret}</td>	
 `
 return tr;
}


//attatch rows
function attachRows(arr){
    let container=document.querySelector(".container-masini");
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }
}


