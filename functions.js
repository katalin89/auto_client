async function  attachHomePage(){


    let container=document.querySelector(".container");

 
    container.innerHTML=`
    
    
    <h1>Cars</h1>
	<p><a class="button new-car">Create New Book</a></p>
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



    let btn=document.querySelector(".new-car");


    btn.addEventListener("click",((e)=>{



        attachNewCarPage();



    }))
    attachRows(data);

    console.log(data);


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



     let btnAddNewCar=document.createElement(".add");
     inp1=document.getElementById('culoare');
     inp2=document.getElementById('marca');
     inp3=document.getElementById('model');
     inp4=document.getElementById('nrDeLocuri');
     inp5=document.getElementById('pret');

    btnAddNewCar.addEventListener("click",()=>{
        let car={culoare:inp1.value,marca:inp2.value,model:inp3.value,nrDeLocuri:input4.value,pret:inp5.value}

        addCar(car).then(data=>{
            let container=document.querySelector(".container");
            let t=createRow(data);
            container.appendChild(t);
            console.log(data);
        })
    })


}

//addnewcar