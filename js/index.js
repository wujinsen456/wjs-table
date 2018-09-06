/**
 * Created by 三木 on 2018/9/5.
 */
    let td=document.querySelectorAll("td");


    td.forEach((items)=>{
        // items.style.width="83px";
        items.ondblclick=function(){
            let input=document.createElement("input");
            // input.style="outline:none;border:none;width:80px";
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
    button.forEach((v)=>{
        v.onclick=function(){
            let tr=v.parentNode.parentNode;
            console.log(tr.parentNode);             //tbody
            tr.parentNode.removeChild(tr);
        }
    });


    function excel(){


        let items = document.querySelectorAll("td");

        items.forEach(function (v) {
            v.ondblclick = function () {
                let input = document.createElement("input");
                input.value = v.innerHTML;
                v.innerHTML = "";
                v.appendChild(input);
                input.focus();
                input.onblur = function () {
                    v.innerHTML = input.value;
                }
            }
        });

        let add=document.querySelector("#add");
        let tbody=document.querySelector("tbody");
        add.onclick=function () {
            let tr=document.createElement("tr");
            tr.innerHTML="<td>1</td>"+"<td>2</td>"+"<td>3</td>"+
                "<td>4</td>"+"<td>5</td>"+"<td>6</td>"+"<td>7</td>"+"<td>8</td>"
                +"<td>9</td>"+"<td>10</td>"+"<td><button>删除</button></td>";
            tbody.appendChild(tr);

            // let button1=document.querySelectorAll("button");
            // console.log(button1);
            // button1.forEach((e)=>{
            //     e.onclick=function(){
            //         let tr=e.parentNode.parentNode;
            //         console.log(tr.parentNode);             //tbody
            //         tr.parentNode.removeChild(tr);
            //     }
            // });
        };


    }



    excel();
