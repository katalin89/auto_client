let btnAdd=document.querySelector(".add");
let inp1=document.getElementById('marca');
let inp2=document.getElementById('model');
let inp3=document.getElementById('culoare');
let inp4=document.getElementById('nrLocuri');
let inp5=document.getElementById('pret');


let listContainer=document.querySelector(".container");

getAllCars().then(data=>attachRows(data));

// fetch("http://localhost:8080/api/v1/masini/marci").then(data=>{
//   return data.json();

// }).then(data=>{
//   console.log(data);
//   createOptions(data)
//   getAllMarci();  
//   })


  let marca= document.querySelector(".marci");
  marca.addEventListener("change",(e)=>{
    getAllMasiniByMarca(marca.value).then((data)=>{

      
      console.log(marca.value);
      createOptions(data);
      attachRows(data);

      console.log("data:"+data);
    })
    

    // fetch(`http://localhost:8080/api/v1/masini/${marca.value}`)
    // .then(data=>{
    //   return data.json();
    // }).then(data=>{
      
     
  
    //   attachRows(data);
      
      
    // })
  })
 



  btnAdd.addEventListener("click",()=>{

    //vom da marca etc ca in intellj proprietatile
    let car={marca:inp1.value,model:inp2.value,culoare:inp3.value,nrDeLocuri:+inp4.value,pret:+inp5.value};//cu + parsam din string la int
   
    addCar(car).then(data=>{
      let container=document.querySelector(".container");
       
      let t=createRow(data);


      container.appendChild(t);


    })

   
    
  })
  
//sa creeze obtiunile
let containerSelect=document.querySelector(".marci");

getAllMarci().then((data)=>{
  createOptions(data);


});

// getAllMasiniByMarca(marca).then((data)=>{
//   attachRows(data);
// })





