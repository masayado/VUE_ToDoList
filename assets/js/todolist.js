const app = new Vue({
    el: "#app",
    data:{
        title: "To-do List",
        subtitle: "Lista de tareas",
        paragraph: "Ingresa la tarea",
        button: "Crear",
        tareas:"",
        tareas2:["Ir al supermercado", "Pagar Internet", "Pagar Netflix"]
    },
    methods:{
        agregar_tarea:function(){
            if(this.tareas != ""){
            this.tareas2.push(this.tareas)
            this.tareas="";
            }
        }
    }
})