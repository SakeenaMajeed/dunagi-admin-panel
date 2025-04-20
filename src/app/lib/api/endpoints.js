
const endpoints = {
    dashboard: {
      getMyStudents: '/students',  
      updateMyStudentsByStudentId: (id) => `/students/${id}`, 
    },
  };
  
  export default endpoints;
  