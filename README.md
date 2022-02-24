# React_F-G_yuvhraj
This Feedback form is created Using React js,Tailwind css, Material UI and react-data-table-component.
This form has two main components FORM and TABLE , for routing between components React Router is used.
It has all the Validations like email validation , phone number validation , all validation erros are stored as an object inside a function , this function is called when user clicks the submit button and all the input values which is stored in the state get passed to this function for validation.
if validation is successfull i.e no errors it means our erroe object is empty , so when error object is empty the update the Data state and store the data in local storage.
for displaying data in table in Table component react-data-table-component is used .
