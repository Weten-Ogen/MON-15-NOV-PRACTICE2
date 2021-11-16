function myFunc(x){
    x.classList.toggle("change");
}
const bar = document.getElementById('container');
bar.addEventListener('click',function(){
    myFunc(this);
})
