class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    this.tableElement.lastElementChild.textContent = '';
    for (let i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if(grades.length < 1){
      this.noGradesElement.className = '';
    }else{
      this.noGradesElement.className = 'd-none';
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    const row = document.createElement('tr');
    const student = document.createElement('td');
    const course = document.createElement('td');
    const grade = document.createElement('td');
    const del = document.createElement('td');
    const button = document.createElement('button');
    student.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    del.className = "text-right"
    button.textContent = 'DELETE';
    button.className = 'btn btn-danger py-1 px-2'
    del.appendChild(button);
    row.append(student, course, grade, del);
    this.tableElement.lastElementChild.appendChild(row);
    button.addEventListener('click', ()=> {
      deleteGrade(data.id);
    });
    return row;
  }
}
