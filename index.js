var icon_x = document.querySelector('.first');
var ul_con = document.querySelector('.ul');
var icon_y = document.querySelector('.second');
console.log(icon_x);
icon_y.addEventListener('click', function () {
    console.log(ul_con);  
    ul_con.classList.toggle('show');
    
});
icon_x.addEventListener('click', function () {
    console.log(ul_con);  
    ul_con.classList.toggle('show');
    ul_con.classList.toggle('disapper')
   
});


document.addEventListener('click', function(e) {
    if (!ul_con.contains(e.target) && !icon_y.contains(e.target)) {
       ul_con.classList.remove('show');
    } 
  });
