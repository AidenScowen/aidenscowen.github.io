var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}

var btn = document.getElementsByClassName('btn2')[0];

btn.addEventListener('click', function(){
    var cv = document.createElement('a');
    cv.href = 'AidenScowensCV.docx';
    cv.download = 'AidenScowensCV.docx';
    cv.click();
});