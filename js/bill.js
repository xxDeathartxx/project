

delbill=(id)=>{
    const url='/bill/'+id;
         const xhr=new XMLHttpRequest();
         xhr.open('DELETE',url,true);
         xhr.onload=()=>{
             if(xhr.readStatus==4||xhr.status==200)
             {
                const result=JSON.parse(xhr.responseText);
                console.log(result);
                window.location.reload();   
             
         
             } 
         }
         xhr.send();
     }
     
  
     addTObill=(e)=>{
        e.preventDefault();
        let name= document.getElementById('product');
        let cost= document.getElementById('cost').value;
        let quantity= document.getElementById('quantity').value;
        let product= name.options[name.selectedIndex].text;
        let body={name:product,cost:cost,quantity:quantity};
        let paramters=JSON.stringify(body);
        const url='/bill/add';
       const xhr=new XMLHttpRequest();
       xhr.open('POST',url,true);
       xhr.setRequestHeader('Content-type','application/json');
       xhr.onload=function(){
        if(xhr.readyState==4||xhr.status==200)
        {
    window.location.reload();
    
     }
       }
     xhr.send(paramters);
    }
    let addbtn=document.getElementById('billform');
    addbtn.addEventListener('submit',addTObill);
    
onValueselect=()=>{

    let id = document.getElementById('product').value;
    const url='/product/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readStatus==4||xhr.status==200)
        {
           const result=JSON.parse(xhr.responseText);
    
        
     document.getElementById('cost').value=result.product.cost;
    
            } 
    }
    xhr.send();
    }
    setPrice=()=>{
    
    
    let cost=document.getElementById('cost').value;
    let quantity=document.getElementById('quantity').value;
    let price=cost*quantity;
    document.getElementById('price').value=price;
    
    }
     billcheck=()=>{
 
     const url='/transactions/add';
     const xhr=new XMLHttpRequest();
     xhr.open('post',url,true);
     xhr.onload=()=>{
         if(xhr.readStatus==4||xhr.status==200)
         {
            const result=JSON.parse(xhr.responseText);
            window.location.reload();   
         
     
         } 
     }
     xhr.send();
 
 
 
 }