var gradeTable = new GradeTable(document.querySelector('table'));
var pageHeader = new PageHeader(document.querySelector('header'));
var gradeForm = new GradeForm(document.querySelector(".form-container"));
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
