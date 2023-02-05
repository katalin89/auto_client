async function  attachHomePage(){
    let container=document.querySelector(".container");

     container.innerHTML=`   
    <h1>Cars</h1>
	<p><a class="button new-car">Create New Car</a></p>
	<table>
		<thead>
			<tr>
            
            <th>Id</th>
            <th>Culoare</th>
				<th>Marca</th>
				<th>Model</th>
				<th>NrDeLocuri</th>
				<th>Pret</th>
				
			</tr>
		</thead>
		<tbody class=container-masini>
		
		</tbody>
	</table>
    `

    let data = await getAllCars();
    attachRows(data);
    let btn=document.querySelector(".new-car");


    btn.addEventListener("click",((e)=>{



        attachNewCarPage();



    }))
    

    let rowsContainer=document.querySelector(".container-masini");

    rowsContainer.addEventListener("click",(e)=>{

        console.log("ceca");        
     
        let data=e.target.parentNode;
        console.log(data);
        
        let carProperties= data.children;

       // car.id=carProperties[0].innerHTML;
       const car = {
        culoare : carProperties[1].innerHTML,
        marca : carProperties[2].innerHTML,
        model : carProperties[3].innerHTML,
        nrDeLocuri : carProperties[4].innerHTML,
        pret : carProperties[5].innerHTML     
    }

        attachUpdatePage(car);
    });
}

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

    container.innerHTML=` <h1>Update car</h1>
    <form onsubmit="return update()">
        <p>
            <label for="marca">marca</label>
            <input name="marca" type="text" id="marca" value="${car.marca}"  disabled>
        </p>
        <p>
            <label for="model">Model</label>
            <input name="model" type="text" id="model" value="${car.model}">
        </p>
        <p>
            <label for="culoare">Culoare</label>
            <input name="culoare" type="text" id="culoare" value="${car.culoare}">
        </p>
        <p>
            <label for="nrDeLocuri">Numar de locuri</label>
            <input name="nrDeLocuri" type="text" id="nrDeLocuri" value="${car.nrDeLocuri}">
        </p>
        <p>
            <label for="pret">Pret</label>
            <input name="pret" type="text" id="pret" value="${car.pret}">
        </p>
        <p>
            <input type="submit" value="Update Masina">
        </p>
    </form>
    <form method="post" action="/cars/8/delete" onsubmit="return confirm('Do you really want to delete this car?');">
        <p>
            <a class="button" href="all_cars.html">Cancel</a>
        </p>
        <p><input type="submit" value="Delete Car"></p>
    </form>`
 }


 //sa navigheze pe  new car
function attachNewCarPage(){


    let container=document.querySelector(".container");

 
    container.innerHTML=`

  

    <h1>New Car</h1>
    <form>

        <p>
            <label for="year">Culoare</label>
            <input name="year" type="text" id="culoare">
        </p>
        <p>
            <label for="title">Marca</label>
            <input name="title" type="text" id="marca">
        </p>
        <p>
            <label for="author">Model</label>
            <input name="author" type="text" id="model">
        </p>
        
        <p>
            <label for="year">NrDeLocuri</label>
            <input name="year" type="text" id="nrDeLocuri">
        </p>

        <p>
            <label for="year">pret</label>
            <input name="year" type="text" id="pret">
        </p>

        
        <p>
            <a class="add">Add car</a>
        </p>
        <p>
            <a class="button">Cancel</a>
        </p>
    </form>

    `



     let btnAddNewCar=document.querySelector(".add");
    let inp1=document.getElementById('culoare');
     let inp2=document.getElementById('marca');
     let inp3=document.getElementById('model');
     let inp4=document.getElementById('nrDeLocuri');
     let inp5=document.getElementById('pret');

     btnAddNewCar.addEventListener("click", async ()=>{
        let car={culoare:inp1.value,marca:inp2.value,model:inp3.value,nrDeLocuri:+inp4.value,pret:+inp5.value}
         let data=await addCar(car);



         attachHomePage();

     
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


