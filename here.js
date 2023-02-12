// here we explain what read is
// const fs=require('fs');
// fs.readFile('./docs/red.txt', (err,data)=>{
//     if(err){
//         console.log(err);   
//     }
//     console.log(data.toString());
// });
// what about write? we are gonna see it now:

// const fs=require('fs');
// fs.writeFile('./docs/red.txt','oops i get it  now',()=>{
//     console.log('it was written.')
// })

// here we are , learning how to create and delete a directory
// const fs=require('fs');
// if (!fs.existsSync('./newone')){
//     fs.mkdir('./newone',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('yea it is created.');
//     })

// }   else{
//     fs.rmdir('./newone',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('yea it is deleted.');

//     })
// }
const fs=require('fs');
if(fs.existsSync('./docs/nonee.txt')){
    fs.unlink('./docs/nonee.txt',(err)=>{
        if(err){
            console.log(err);

        }
      console.log('hhh');  
    })
}

