
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 250){
        document.querySelector('nav').style.height='2rem';        
        document.querySelector('.nav-container').style.height='2rem'
        document.querySelector('.nav-container').style.height='2rem'
        document.querySelector('.logo-image').style.height = '2rem'
        document.querySelector('.logo-image').style.width = '2rem'
        document.querySelector('.logo-image img').style.height ='2rem'
        document.querySelector('.logo-image img').style.width ='2rem'
        document.querySelector('.departments').style.top = '2rem'
        document.querySelector('.services').style.top = '2rem'
        document.querySelector('.staff-makeup').style.top = '2rem'
        
    }else{
        document.querySelector('nav').style.height='4rem'
        document.querySelector('.nav-container').style.height='4rem'
        document.querySelector('.nav-container').style.height='4rem'
        document.querySelector('.logo-image').style.height = '4rem'
        document.querySelector('.logo-image').style.width = '4rem'
        document.querySelector('.logo-image img').style.height ='4rem'
        document.querySelector('.logo-image img').style.width ='4rem'
        document.querySelector('.departments').style.top = '4rem'
        document.querySelector('.services').style.top = '4rem'
        document.querySelector('.staff-makeup').style.top = '4rem'
        
    }


})


window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 320 || screenWidth <= 1024) {
    
  }
  
});



const departmentsMainMenuItem = document.querySelector('#dpts');
const servicesMainMenuItem = document.querySelector('#svcs');
const departments = document.querySelector('.departments');
const services = document.querySelector('.services');

departmentsMainMenuItem.addEventListener('click', ()=>{
       departments.classList.toggle('show');
       if(services.classList.contains('show')){
        services.classList.remove('show');
       };    
});

servicesMainMenuItem.addEventListener('click', ()=>{
    services.classList.toggle('show');
    if(departments.classList.contains('show')){
        departments.classList.remove('show');
    };
});


const anchorTagsMenuItems = document.querySelectorAll('.nav-menu ul a');

anchorTagsMenuItems.forEach(item=>{
    item.addEventListener('click', ()=>{
        if(departments.classList.contains('show') || services.classList.contains('show')){
            departments.classList.remove('show')
            services.classList.remove('show')
        }
    })
});


const pageElements = document.querySelectorAll('header, main, section, footer');

pageElements.forEach(item =>{
    item.addEventListener('click', ()=>{
        if(departments.classList.contains('show') || services.classList.contains('show')){
            departments.classList.remove('show')
            services.classList.remove('show')
        }
    })
});


const staffMenu = document.querySelector('.staff-makeup');
const staffEle = document.querySelector('.staff');



staffEle.addEventListener('mouseover', ()=>{    
    staffMenu.classList.add('show');
    departments.classList.remove('show')
    services.classList.remove('show')
});

staffMenu.addEventListener('mouseover', ()=>{
    staffMenu.classList.add('show');
});



staffEle.addEventListener('mouseout', ()=>{    
    staffMenu.classList.remove('show');
  
});

staffMenu.addEventListener('mouseout', ()=>{    
    staffMenu.classList.remove('show');
});



//============================= File upload logic  ==================================







// ======== Logic for the hamburger Icon ===========================

const hamburgerIcon = document.querySelector('.hamburger');
const closeBtnIcon = document.querySelector('.closeIcon');
const navMenus = document.querySelector('.nav-menu');

// const nonDropDnMenus = document.querySelectorAll('');

const nonDropDnMenus = document.querySelectorAll('.nav-menu ul a:first-child, .nav-menu ul a:nth-child(5), .nav-menu ul a:nth-child(6), .nav-menu ul a:nth-child(7)')

console.log(document.querySelector('.nav-menu ul a:nth-child(7)'))



const servieTypes = document.querySelector('.services');
const departmentTypes = document.querySelector('.departments');
const staffMakeup = document.querySelector('.staff-makeup');

hamburgerIcon.addEventListener('click', ()=>{
    navMenus.classList.toggle('visible')
})


closeBtnIcon.addEventListener('click', ()=>{
    navMenus.classList.toggle('visible')
    if(departments.classList.contains('show')){
        departments.classList.remove('show')
    }    
    if(services.classList.contains('show')){
        services.classList.remove('show')
    }
})

nonDropDnMenus.forEach(item=>{
    item.addEventListener('click', ()=>{
        navMenus.classList.toggle('visible')
    })
})


// fecthing a component in JS.
// ================================== 
// fetch("/components/navbar.html")
//   .then(res => res.text())
//   .then(data => document.getElementById("navbar").innerHTML = data);





































