function details(){
    var email = document.getElementById("user[email]").value;
    console.log(email);
    var password = document.getElementById("user[password]").value;
    console.log(password);
    var confirm_password = document.getElementById("user[confirm_password]").value;
    console.log(confirm_password);
    var image = document.getElementById("user[file]").value;
    console.log(image);
    arr_detail = {
        mail : email,
        pwd  : password,
        cn_pwd : confirm_password,
        img  : image
    }
    localStorage.setItem("arr_detail",JSON.stringify(arr_detail));
    console.log(arr_detail);
    window.location.href="pirple/index.html"
}
function clickThis(){
    var email = document.getElementById("user[email]").value;
    console.log(email);
    var password = document.getElementById("user[password]").value;
    console.log(password);
    data=JSON.parse(localStorage.getItem("arr_detail"));
    console.log(data);
    if(data.mail === email && data.pwd === password){
        console.log(data);
        window.location.href="index.html";
    }
    else{
        alert("invalid");
        window.location.href="signin.html";
    }
}
function addBtns(title) {
    var modal = document.getElementById("myModal");
    var Name = String(title);
    var list = document.getElementById(Name+"-section");
    var editbtn = document.createElement("BUTTON");
    var fn ="edit('" + Name + "')";
    editbtn.setAttribute("onclick","edit()");
    editbtn.setAttribute("id","editbutt") ;
    editbtn.innerHTML="Edit";
    document.getElementById(Name+"-section").appendChild(editbtn);
    list.insertBefore(editbtn, list.childNodes[0]);
    var btn = document.getElementById("editbutt");
    var savebtn = document.getElementById("save-butt");
    savebtn.setAttribute("class",Name);
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    savebtn.onclick=function(){
        var inputtitle = document.getElementById("title-input").value;
        var inputdesc = document.getElementById("title-input-desc").value;
        var title = document.getElementById("save-butt").className;
        var classnames1 = "course-"+ title;
        var classnames2 = "describe-"+ title;
        document.getElementById(classnames1).innerHTML = inputtitle;
        document.getElementById(classnames2).innerHTML = inputdesc;
        modal.style.display = "none";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    var delbtn = document.createElement("BUTTON");
    var fn ="del('" + Name + "')";
    delbtn.setAttribute("onclick",fn);
    delbtn.setAttribute("width","100%") ;
    delbtn.innerHTML="Delete";
    document.getElementById(Name+"-section").appendChild(delbtn);
    list = document.getElementById(Name+"-section");
    list.insertBefore(editbtn, list.childNodes[1]);
    }
function add(){
    var title = prompt("Please enter Course name:", "");
    var desc = prompt("Please enter Course description:", "");
    if (title == null || desc == "" || title == "" || desc == null) {
        txt = "Invalid input";
    }
    else {
        var titleclass = title + "-section";
        var itm = document.getElementById("courses-container").lastElementChild;
        var cln = itm.cloneNode(true);
        document.getElementById("courses-container").appendChild(cln);
        var list = document.getElementById("courses-container");   
        list.insertBefore(cln, list.childNodes[0]);
        cln.setAttribute("id", titleclass);
        cln.innerHTML='<div class="container" style="padding-bottom: 0px; padding-top: 40px; border-width: 1px 0 0;">'
        +'<article class="content">'
        +'<section class="course-description1">'
        +'<header class="course-heading1">'
        +'<h3 id="course-'+title+'">'+ title +'</h3>'
        +'</header>'
        +'<p id="describe-'+title+'">'
        + desc +'</p>'
        +'<div class="button1">'
        +'<a class="button-primary" href="">View Course Details</a>'
        +'</div>'
        +'</section>'
        +'</article>'
        +'</div>';
        txt = "Title :  " + title + "\nDesc : " + desc +"\nSuccessfully added." ;
        addBtns(title);
}
window.alert(txt);
}
//function edit(){
  //  var name1 = String(title);
   // var classnames1 = "course-"+ name1;
   // var course = prompt("Please enter Course to edit", name1);
   // console.log(course);
   // classnames2 = "describe-"+ title;
   // var d = document.getElementByClassName(classnames2).innerHTML;
   // var desc = prompt("Please enter Course description:", d);
   // document.getElementById(classnames1).innerHTML = course;
   // document.getElementById(classnames2).innerHTML = desc;
//}
function del(title){
    title += "-section";
    document.getElementById(title).remove();
}