/**
 * Created by 三木 on 2018/9/5.
 */
    let td=document.querySelectorAll("td");
    //        alert(td.length);

    td.forEach((items)=>{
        items.style.width="83px";
        items.ondblclick=function(){
            let input=document.createElement("input");
            input.style="outline:none;border:none;width:80px";
            this.innerText="";
            input.value=this.innerText;
            items.appendChild(input);
            input.focus();
            input.onblur=function(){
                items.innerText=this.value;
            }
        }
    });

    let button=document.querySelectorAll("button");
    button.forEach((v,i)=>{
        v.onclick=function(){
            let tr=v.parentNode.parentNode;
            console.log(tr.parentNode);             //tbody
            tr.parentNode.removeChild(tr);
        }
    })