let button = document.querySelector('.btn');
let studentList = document.querySelector('.studentList');
let noStudent = document.querySelector('.noStudent')

function Student(userName, roll, id, clas, age) {
    this.name = userName;
    this.roll = roll;
    this.id = id;
    this.clas = clas;
    this.age = age;
}

button.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let roll = document.getElementById('roll').value;
    let id = document.getElementById('studentId').value;
    let clas = document.getElementById('clas').value;
    let age = document.getElementById('age').value;
    if (noStudent) {
        noStudent.remove();
    }
    
    let student = new Student(name, roll, id, clas, age);
    let card = document.createElement('div');
    card.className = 'studentCard';
    card.innerHTML = `
        <p>Name: ${student.name}</p>
        <p>Roll: ${student.roll}</p>
        <p>ID: ${student.id}</p>
        <p>Class: ${student.clas}</p>
        <p>Age: ${student.age}</p>
        <div class="btn_group">
            <button class="edit_btn">Edit</button>
            <button class="delete_btn">Delete</button>
        </div>

        `;
    studentList.appendChild(card);
});