var tbody = document.querySelector('.tbody');

var previousData = [
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'rj789@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'priyanka456@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'yomikpandya@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'kishormehta@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'sakshi@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'shrutijd@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'infinitech@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'larvator@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' },
    // { eaddress: 'Intern1conqt@gmail.com', fname: 'Intern1', lname: 'Techcurve', phno: '1234567897', ecategory: 'ERP', rdate: '2023-09-20' }
];

// console.log(previousData);
function loadValues(arrayData){
    tbody.innerHTML = '';
    var myrecord = ``;

    arrayData && arrayData.length>0 && arrayData.forEach((val)=>{
        console.log(val);
        var {eaddress,fname,lname,phno,ecategory,rdate} = val;
        console.log(fname,lname);
        myrecord = myrecord + `<tr>
        <td><input type="checkbox" name="" id=""></td>
        <td>${eaddress}</td>
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${phno}</td>
        <td><p>${ecategory}</p></td>
        <td>${rdate}</td>
        </tr>`
    })
    console.log(myrecord);
    tbody.innerHTML = myrecord;
}
loadValues(previousData);
let displayData = () => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    // console.log(userData);
    let finalData = '';
    userData.forEach((element, i) => {
        finalData += `
        <tr>
        <td><input type="checkbox" name="" id=""></td>
        <td>${element.eaddress}</td>
        <td>${element.fname}</td>
        <td>${element.lname}</td>
        <td>${element.phno}</td>
        <td><p>${element.ecategory}</p></td>
        <td>${element.rdate}</td>
        </tr>
        `
    });
    // console.log(finalData);
    tbody.innerHTML += finalData;
}

displayData();




// show data in popup
var popupinnerContent = document.querySelector('.popupinnerContent');
var popupContainer = document.querySelector('.popupContainer');
var table = document.getElementById('table1');
table.addEventListener('click', (event) => {
    // console.log(event);
    var targetELement = event.target;
    // console.log(targetELement);
    if (targetELement.tagName === 'TD' && targetELement.parentElement.tagName === 'TR') {
        displayPopup(targetELement.parentElement);
    }
})

var displayPopup = function (row) {
    // console.log(row);
    var cellData = row.getElementsByTagName('td');
    // console.log(cellData);
    var [text1, text2, text3, text4, text5, text6, text7] = cellData;
    // console.log(text2);

    popupinnerContent.innerHTML = `
        <p>Email Address: ${text2.innerHTML}</p>
        <p>First Name: ${text3.innerHTML}</p>
        <p>Last Name: ${text4.innerHTML}</p>
        <p>Phone No: ${text5.innerHTML}</p>
        <p>Email Category: ${text6.innerHTML}</p>
        <p>Register Date: ${text7.innerHTML}</p>
    `

    popupContainer.style.display = 'block';
}

var closebtn = document.querySelector('.closebtn');
closebtn.addEventListener('click', function () {
    // console.log('test');
    if (popupContainer.style.display == 'block') {
        popupContainer.style.display = 'none'
    }
})
var sec_btn = document.querySelector('.sec_btn').addEventListener('click', myfunct);
function myfunct() {
    // console.log('test');
    if (popupContainer.style.display == 'block') {
        popupContainer.style.display = 'none'
    }
}

// pagination
var total_records_tr = document.querySelectorAll('.tbody tr');
var records_per_page = 10;
let page_number = 1;
var total_records = total_records_tr.length;
var total_page = Math.ceil(total_records / records_per_page);
generatePaginare();
DisplayPagination();
function DisplayPagination() {
    let start_index = (page_number - 1) * records_per_page;
    // console.log(start_index);
    let end_index = start_index + (records_per_page - 1);
    if(end_index >= total_records){
        end_index = total_records - 1;
    }
    var fullRow = '';

    for (let i = start_index; i <= end_index; i++) {
        // console.log(i);
        fullRow += `<tr>${total_records_tr[i].innerHTML}</tr>`
    }
    tbody.innerHTML = fullRow;
}

function generatePaginare() {
    let prvbtn = `<li onclick="prvPage()">
    <a href="#" ><i class="fa-solid fa-less-than"></i>&nbsp;Previous</a>
</li>`;

    let nxtbtn = `<li onclick="nextPage()">
    <a href="#" >Next &nbsp;<i class="fa-solid fa-greater-than"></i></a>
</li>`;

    var buttons = ``;
    for (i = 1; i <= total_page; i++) {
        // console.log(i);
        if (i == 1) {
            buttons += `<li class=" input_class active">
    <a href="#">${i}</a>
</li>`;
        } else {
            buttons += `<li class="input_class">
            <a href="#">${i}</a>
        </li>`;
        }
    }
    document.getElementById('pagination').innerHTML = `${prvbtn} ${buttons} ${nxtbtn}`
}

function prvPage() {
    // console.log('test');
    page_number--;
    DisplayPagination();
    
}
function nextPage() {
     page_number++;
    DisplayPagination(); 
}
var sidebar = document.querySelector('.sidebar');
 
document.querySelector('.fa-bars').onclick = function(){
    if(sidebar.style.display == 'none'){
        sidebar.style.display = 'block';
        sidebar.style.background = '#fff';
        document.querySelector('.xfamark').style.display = 'block';
    }
    else{
        sidebar.style.display = 'none'
    }
}

document.querySelector('.xfamark').onclick = function(){
    if(sidebar.style.display == 'block'){
        sidebar.style.display = 'none';
        sidebar.style.width = '0%';
    }
}







// sidebar 

