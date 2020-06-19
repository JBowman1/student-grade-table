const gradeTable = new GradeTable(document.querySelector('table'), document.querySelector('p'));
const pageHeader = new PageHeader(document.querySelector('header'));
const gradeForm = new GradeForm(document.querySelector(".form-container"));
const app = new App(gradeTable, pageHeader, gradeForm);
app.start();
