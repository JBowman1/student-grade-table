var gradeTable = new GradeTable(document.querySelector('table'));
var pageHeader = new PageHeader(document.querySelector('header'));
var app = new App(gradeTable, pageHeader);
app.start();
