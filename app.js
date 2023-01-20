

getAllCars().then(data=>attachRows(data));

fetch("http://localhost:8080/api/v1/masini/marci").then(data=>{
  return data.json();

}).then(data=>{
  console.log(data);
  createOptions(data)
  
  })
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

  let marca= document.querySelector(".marci");
  marca.addEventListener("change",(e)=>{
    console.log(marca.value);  

    fetch(`http://localhost:8080/api/v1/masini/${marca.value}`)
    .then(data=>{
      return data.json();
    }).then(data=>{
      
      console.log(data);
  
      attachRows(data);
      
      
    })
  })
  let listContainer=document.querySelector(".container");
  let btnAdd=document.querySelector(".add");
  let inp1=document.getElementById('marca');
  let inp2=document.getElementById('model');
  let inp3=document.getElementById('culoare');
  let inp4=document.getElementById('nrLocuri');
  let inp5=document.getElementById('pret');

console.log(inp1);
console.log (inp4);

  btnAdd.addEventListener("click",()=>{

    //vom da marca etc ca in intellj proprietatile
    let car={marca:inp1.value,model:inp2.value,culoare:inp3.value,nrDeLocuri:+inp4.value,pret:+inp5.value};//cu + parsam din string la int
   
    addCar(car).then(data=>{
      let container=document.querySelector(".container");
       
      let t=createRow(data);


      container.appendChild(t);


    })

   
    
  })
  






