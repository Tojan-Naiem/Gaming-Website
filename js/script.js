function openSidebar(){
    var sidebar= document.getElementById('mySidepanel');
    toggleBtn=document.getElementById('toggleBtn');
if(sidebar.style.left=='0px'){
    sidebar.style.left='-600px';
    toggleBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
}
else {
    sidebar.style.left='0';
    toggleBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
}
   
}