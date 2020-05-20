console.log("Ajax Tutorial in One video");

let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log('You have clicked');
    //Initiate an xhr object
    const xhr=new XMLHttpRequest();
    // open the object
    xhr.open('GET','info.txt',true);
    
    console.log('You have clicked');
    //what to do on progress(opyional)
    xhr.onprogress=function(){
        console.log('On progress');
    }
    xhr.onload=function(){
        if(this.status==200){
            document.write(this.responseText)
        }
        else
        console.error("Some Error occured");
        
        
    }
    //send the request
    xhr.send();
    

}