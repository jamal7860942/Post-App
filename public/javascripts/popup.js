let openModal = document.querySelectorAll('.openModal');
let deleteModal = document.querySelector('.deleteModal');
let cancelbtn = document.querySelector('.cancel-btn');
let main = document.querySelector('.main-div');
let delbtn = document.querySelector('.del-btn');

let delUrl='';
openModal.forEach(button =>{
    button.addEventListener('click' , function(e){
        e.preventDefault();
        delUrl = e.target.getAttribute('href');

        deleteModal.classList.remove('hidden');
        main.classList.add('hidden');
    })
})

cancelbtn.addEventListener('click' , function(){
    deleteModal.classList.add('hidden');
    main.classList.remove('hidden');
})

delbtn.addEventListener('click' , function(dets){
    window.location.href = delUrl;
})