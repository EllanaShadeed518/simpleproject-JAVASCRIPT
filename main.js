let CourseName = document.getElementById("courseName");
let CourseCategory = document.getElementById("courseCategory");
let CoursePrice = document.getElementById("coursePrice");
let CourseDescription = document.getElementById("courseDescription");
let Courses=[];
let data =document.getElementById("display");
let Search =document.getElementById("search");

if(localStorage.getItem("AllData")!=null){
    Courses = JSON.parse(localStorage.getItem("AllData"));
    displayCourse();
}else {
    Courses =[];
}

function CreateCourses(){
    let Course = {
CName: CourseName.value,
CCategory: CourseCategory.value,
CPrice: CoursePrice.value,
CDescription: CourseDescription.value
    }
    Courses.push(Course);
    localStorage.setItem("AllData",JSON.stringify(Courses));
    displayCourse();
    ClearCourse();
}

function displayCourse(){
let result =``;
for(let i=0;i< Courses.length;i++){
    result+=`
    <tr>
    <td>${i}</td>
    <td> ${Courses[i].CName}</td>
    <td> ${Courses[i].CCategory}</td>
    <td> ${Courses[i].CPrice}</td>
    <td> ${Courses[i].CDescription}</td>
    <td><button onclick="updateCourse(${i})"><i class="fas fa-edit"></i></button></td>
    <td><button class="delete" onclick="deleteCourse(${i})"><i class="fas fa-trash-alt"></i> </button></td> </tr> `;
}
data.innerHTML=result;
}

function ClearCourse (){
     CourseName.value="";
 CourseCategory.value="";
 CoursePrice.value="";
 CourseDescription.value="";
}

function deleteCourse(id){
Courses.splice(id,1);
localStorage.setItem("AllData",JSON.stringify(Courses));
displayCourse();
}

function updateCourse(id){
    Courses[id].CName=CourseName.value;
    Courses[id].CCategory=CourseCategory.value;
    Courses[id].CPrice=CoursePrice.value;
    Courses[id].CDescription=CourseDescription.value;
    localStorage.setItem("AllData",JSON.stringify(Courses));
    displayCourse();
    ClearCourse();
}

function searchCourse(){
    let SearchValue =Search.value;
    let result=``;
    for(let i=0;i<Courses.length;i++){
        if(Courses[i].CName.toLowerCase().includes(SearchValue.toLowerCase()))
        result+=`
    <tr>
                <td>${i}</td>
                <td>${Courses[i].CName}</td>
                <td>${Courses[i].CCategory}</td>
                <td>${Courses[i].CPrice}</td>
                <td>${Courses[i].CDescription}</td>
                <td><button onclick="updateCourse(${i})"><i class="fas fa-edit"></i></button></td>
               <td><button onclick="deleteCourse(${i})" class="delete"><i class="far fa-trash-alt"></i> </button></td>
            </tr>
        `;
    }
    data.innerHTML=result;
 }
 






