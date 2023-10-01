// audience list 
var arrow_btn = document.querySelector('.fa-angle-up');
    var list_item = document.querySelector('.list_item');
    var arrow_up = document.querySelector('.arrow_up');
    arrow_btn.onclick = function () {
      console.log('test');
      if (list_item.style.display == 'block') {
        list_item.style.display = 'none';
        arrow_up.setAttribute('class', 'fa-solid fa-angle-down');
      }
      else {
        list_item.style.display = 'block';
        arrow_up.setAttribute('class', 'fa-solid fa-angle-up');
      }
    }

    // audience list end
// form data start
document.querySelector('.savebtn').onclick = function () {
    // console.log('test');
    var [text1, text2, text3, text4, text5, text6, text7, text8] = document.querySelectorAll('#txt');
    console.log(text8.value);
    // console.log(text1.value);
    var result = document.querySelector('.result');
    const phoneNumberRegex = /^\d{10}$/;
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

    if (text1.value == '' || text2.value == '' || text3.value == '' || text4.value == '' || text5.value == '' || text6.value == '' || text7.value == '' || text8.value == '') {
        // console.log('empty fields not allowed');
        alert('Empty fields not allowed');
    }
    else if (isNaN(text4.value)) {
        alert('string not allowed in number field');
    }
    else if (!phoneNumberRegex.test(text4.value)) {
        alert('Mobile No should be 10 digits');
    }

    else {
        userData.push({
            'fname': text1.value,
            'lname': text2.value,
            'eaddress': text3.value,
            'phno': text4.value,
            'ecategory': text5.value.toUpperCase(),
            'source': text6.value,
            'company': text7.value,
            'rdate': text8.value
        });
        console.log(userData);
        localStorage.setItem('userDetails', JSON.stringify(userData));
        console.log(userData);
        alert('Data added, Go to Email Subscriber List');
    }


    text1.value = '';
    text2.value = '';
    text3.value = '';
    text4.value = '';
    text5.value = '';
    text6.value = '';
    text7.value = '';
    text8.value = '';
};

// display data on screen 1


document.querySelector('.clear').onclick = function(){
    // console.log('test');
    var [text1, text2, text3, text4, text5, text6, text7, text8] = document.querySelectorAll('#txt');
    // console.log(text1.value);
    text1.value = '';
    text2.value = '';
    text3.value = '';
    text4.value = '';
    text5.value = '';
    text6.value = '';
    text7.value = '';
    text8.value = '';
}

var sidebar = document.querySelector('.sidebar');
 
document.querySelector('.fa-bars').onclick = function(){
    // console.log('test');
    // var sidebar = document.querySelector('.sidebar');
    // console.log(sidebar);
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
    // console.log('test');
    if(sidebar.style.display == 'block'){
        sidebar.style.display = 'none';
    }
}