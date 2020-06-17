class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var average = 0;
    for (var i = 0; i < grades.length; i++) {
      average += grades[i].grade;
    }
    average = average / grades.length;
    this.pageHeader.updateAverage(average);
  }
  getGrades() {
    $.ajax({
      type: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "94XmdKEz"
      },
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess,
    })
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
  createGrade(name, course, grade) {
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "94XmdKEz",
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    });
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
}
