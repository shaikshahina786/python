
function valid(){
    let a=/^[a-z,A-Z,0-9,_,-,]+@[a-z,A-Z]+\.[a-z][3,9]$/
    let result=a.test();
    if(a){
        console.log("username is valid");
        
    }
    else{
        console.log("username is invalid");
    }   
}
