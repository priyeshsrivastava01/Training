// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log('callback function');
// },2000);
// console.log(3);
// console.log(4);

const request=new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
    //console.log(request,request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText);
    }
})
request.open('GET','https://jsonplaceholder.typicode.com/todos/1');
request.send();