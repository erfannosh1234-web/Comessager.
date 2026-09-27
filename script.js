document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});

window.addEventListener('load',()=>{const preloader=document.getElementById('preloader');setTimeout(()=>preloader.classList.add('hide'),650);});
