// let lapar = false;
// if (lapar){
// console.log("saya lapar");
// } else{
// console.log("tidak makan")
// }

// //.if-else-if
// let stoplight = '';

// if (stoplight === 'red'){
//     console.log('stop!');
// }else if (stoplight === 'yellow'){
//     console.log('slow down');
// }else if (stoplight === 'green'){
//     console.log('Go!');
// } else{
//     console.log('cauntion, unknow!');
// }


// //.switch
// let ramburambu='merah';
// switch(true){
//     case ramburambu === 'merah':
//     console.log('tidak boleh melintas');
//     break;
//     case ramburambu === 'kuning':
//     console.log('siap');
//     break;
//     default:
//     console.log('rambu tidak terdetek');
// }


// //.hari berdasarkan angka
// let namahari= 1;
// switch(true){
//     case namahari === 2:
//     console.log('senin');
//     break;
//     case namahari === 3:
//     console.log('selasa');
//     break;
//     case namahari === 4:
//     console.log('rabu');
//     break;
//     case namahari === 5:
//     console.log('kamis');
//     break;
//     case namahari === 6:
//     console.log('jumat');
//     break;
//     case namahari === 7:
//     console.log('sabtu');
//     break;
//     case namahari === 1:
//     console.log('minggu');
//     break;
//     default:
//     console.log('hari libur');
// }


// //.startup
// let startUp = 'CEO';
// switch (true) {
//   case startUp === "CEO":
//     console.log("Memimpin dan mengelola perusahaan");
//     break;
//   case startUp === "CTO":
//     console.log("Membuat projek");
//     break;
//   case startUp === "HRD":
//     console.log("Melakukan rekrutmen untuk calon pegawai baru");
//     break;
//   case startUp === "PROGRAMMER":
//     console.log("Merancang dan memodelkan kode program");
//     break;
// }

// //let for(looping)
// let angka = 0;
// for (angka; angka <= 10; angka++) {
//     console.log("jumlah" + angka);
// }

// //bbbbbb

// const car ={
//   color:'red',
//   gasoline:'pertamax',
//   tire: 4,
//   startEngine: function(){
//     return 'engine started';
//   },
//   brake: function(){
//     return 'ban di rem';
//   },
// };
// console.log(car.brake());

// const person = {
//   firstName: "Budi",
//   lastName: "Hafidz",
//   age: "infinite",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };



// let hewan = {
//   name: 'john',
//   kaki : 4,
//   isVaccinated: true,
//   pet: {
//     kucing :"katy",
//     dog : "diggy",
//   }, 
// };

// console.log (hewan.pet);
// hewan.pet.kucing = "si oren";

// //mengakses array
// let job=['fronted', 'backend','fullstack', 1000, true]
// console.log(job[1]);
// console.log(job[2]);
// console.log(job[3]);
// console.log(job[4]);


// job[3]= 'ui';
// job[4]= 'ux';

// job.push('develover operation');
// job.pop();
// job.splice(2, 2,'hai');
// console.log(job);


// //map
// let arr=[3,5,7,9,11];
// let double = arr.map(num => {
//   return num * 5;
// });
// console.log(double);

// //
// let studentName =["Fajar","Miana","Salwa","Aku","Hai"];

// studentName.sort();
// console.log(studentName);

// console.log  ("title.Dokumen", document.title)



// const text1 =document.querySelector("#sic")
// console.log("text1", text1);

// const user= {
//   name :"skilvul",
//   hobby: "Belajar coding"
// };

// document.getElementById("text.dom")

// const image=ducument.createElement('img');
// image.src="./volume.png"




// console.log('Title document', document.title);

// const text1 = document.getElementById ("sic");

// console.log(text1);

// text1.style.backgroundColor = "red";
// text1.style.fontSize = "100px";
// const user = {
//   name: "skilvul",
//   hobby: "ngoding",
// };

// //menambahkan gambar dengan dom
// const image = document.createElement("img");
// image.src ="";
// document.querySelector("#container").appendChild(image);

// document.getElementById("text-dom").innerHTML = user.name;
// document.getElementById("hobby-dom").innerHTML = user.hobby;


// // membuat event listener
// document.getElementById("sic").addEventListener("mouseover", displayAlert);
// function displayAlert(){
//   alert("melewati element id SIC");
// }





// // export const sayHello =(user) => {
//   alert ("hello"+ user);
//   alert('hello $ {user}');
// };
console.log('miana')

fetch('https://api.github.com/users/Miananur')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('username').innerHTML = data.login
    document.getElementById('id').ineerHTML = data.id


    // style.css
    document.getElementById('id1').style.fontFamily = "brush script mt";
    document.getElementById('id1').style.fontSize = "35px";
    document.getElementById('id1').style.backgroundColor = "#BFD8B8";
    document.getElementById('id1').style.textAlign = "center";
    document.getElementById('id1').style.height = "60px";
    document.getElementById('id1').style.marginTop = "0px";
    document.getElementById('id1').style.textDecoration = "underline";

    document.getElementById('img1').style.backgroundColor = "#F0E5CF";
    document.getElementById('img1').style.margin = "auto";

    document.getElementById('fot').style.width = "300px";
    document.getElementById('fot').style.borderRadius = "50%";
    document.getElementById('fot').style.display = "block";
    document.getElementById('fot').style.marginLeft = "auto";
    document.getElementById('fot').style.marginRight = "auto";
    document.getElementById('fot').style.padding = "0px";
    document.getElementById('fot').style.boxShadow = "0 0 5px 0.5px #FF94CC";

    document.getElementById('btn1').style.backgroundColor = "#F6DFEB";
    document.getElementById('btn1').style.Color = "white";
    document.getElementById('btn1').style.marginBottom = "20px";
    document.getElementById('btn1').style.width = "100px";
    document.getElementById('btn1').style.boxShadow= " 0 0 5px 0px #7B6079";

    document.getElementById('desk').style.backgroundColor = "#F0E5CF";
    document.getElementById('desk').style.margin = "auto";

    document.getElementById('para').style.textAlign = "center";
    document.getElementById('para').style.fontSize = "15px";
    document.getElementById('para').style.fontWeight = "10px";

    document.getElementById('btn2').style.display = "block";
    document.getElementById('btn2').style.marginLeft = "auto";
    document.getElementById('btn2').style.marginRight = "auto";
    document.getElementById('btn2').style.backgroundColor = "#BFD8B8";

    document.getElementById('username').style.width = "300px";

    document.getElementById('id').style.display = "block";
    document.getElementById('id').style.marginLeft = "auto";
    document.getElementById('id').style.marginRight = "auto";
    document.getElementById('id').style.backgroundColor = "#BFD8B8";
    document.getElementById('id').style.width = "314px";
    document.getElementById('id').style.height = "45px";
    document.getElementById('id').style.marginTop = "10px";

    document.getElementById('myBtn').style.display = "block";
    document.getElementById('myBtn').style.marginLeft = "auto";
    document.getElementById('myBtn').style.marginRight = "auto";
    document.getElementById('myBtn').style.backgroundColor = "#BFD8B8";
    document.getElementById('myBtn').style.width = "314px";
    document.getElementById('myBtn').style.height = "45px";
    document.getElementById('myBtn').style.marginTop = "10px";

    document.getElementById('mi').style.textAlign = "center";
  })
  var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hai, Salam kenal! Follow aku di GitHub yuk!");
}

function someOtherFunction() {
  alert ("Click (inspect>console) for more information.");
}