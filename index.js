console.log(global);
setTimeout(()=>{
    console.log('try to find out the error');
    clearInterval(hell);
},3000); 
const hell=setInterval(()=>{
    console.log('u r getting better.');
},1000);
