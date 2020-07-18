

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
 Pdel=(id)=>{
    const url='/product/'+id;
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

 
   
   
    /*updateproduct=(e)=>{
        e.preventDefault();
        const id=document.getElementById('updateid').value;
        const name=document.getElementById('updatename').value;
        const cost=document.getElementById('updatecost').value;
        const type=document.getElementById('updatetype').value;
        const data={name:name,cost:cost,type:type};
        const paramters=JSON.stringify(data);
        let url='/product/'+id;
        let xhr=new XMLHttpRequest();
        console.log(paramters);
        xhr.open('PUT',url,true);
        xhr.setRequestHeader('Content-type','application/json');
        xhr.onload=function(){
            if(xhr.readyState==4||xhr.status==200)
            {
                window.location.reload();
            }
            else
            {
                
            }
        }
        xhr.send(paramters);
    }
    let update_product_form=document.getElementById('update-product');
    update_product_form.addEventListener('submit',updateproduct);*/
    delType=(id)=>{
        const url='/type/'+id;
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
  
    
    /*updatetype=(e)=>{
        e.preventDefault();
        const id=document.getElementById('updateTid').value;
        const name=document.getElementById('updateTname').value;
        const data={name:name};
        const paramters=JSON.stringify(data);
        let url='/type/'+id;
        let xhr=new XMLHttpRequest();
        console.log(paramters);
        xhr.open('PUT',url,true);
        xhr.setRequestHeader('Content-type','application/json');
        xhr.onload=function(){
            if(xhr.readyState==4||xhr.status==200)
            {
                window.location.reload();
            }
            else
            {
                console.log(this.responseText);
            }
        }
        xhr.send(paramters);
    }
    let update_type_form=document.getElementById('update-type');
    update_type_form.addEventListener('submit',updatetype);*/
    
checkbill=()=>{
const url='/bill/getbill';
const xhr=new XMLHttpRequest();
xhr.open('GET',url,true);
xhr.onload=()=>{
    if(xhr.readStatus==4||xhr.status==200)
    {
        let billinfo=[result.bill.Product_name,result.bill.quantity];
        let total;
        const result=JSON.parse(xhr.responseText);
       result.forEach(element=()=>{
           total=result.bill.price+total;
           console.log(total);
       });
    
    
          console.log(billinfo);
    }
}
xhr.send();
}






