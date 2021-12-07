function Post_it(){
    let obj = [];
    obj.push({id:Math.random()});
    let anew;

    anew = obj.flatMap((obj)=>{
        return `<Post id:${obj.id}/>`;
        
    })

    console.log(anew)





}
Post_it();