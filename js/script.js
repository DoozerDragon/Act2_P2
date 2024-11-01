const app = Vue.createApp({
    data() {
        return {
            isLoading: true,
            tareas: [
                { nombre: 'Bailar', completado: true },
                { nombre: 'Memorizar', completado: true },
                { nombre: 'Atender mis Clases', completado: true },
                { nombre: 'Un rato de Hobby', completado: false },
                { nombre: 'Salir a Correr', completado: false }
            ],
            nuevaTarea: '',
            progreso: 0,
            colorBarra: 'green'
        };
    },
    computed: {
        tareasCompletadas() {
            return this.tareas.filter(tarea => tarea.completado).length;
        }
    },
    methods: {
        toggleTarea(index) {
            this.tareas[index].completado = !this.tareas[index].completado;
        },
        agregarTarea() {
            if (this.nuevaTarea.trim() !== '') {
                this.tareas.push({ nombre: this.nuevaTarea, completado: false });
                this.nuevaTarea = ''; // Limpia el campo después de agregar la tarea
            }
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1); // Elimina la tarea en el índice dado
        },
        incrementarProgreso() {
            if (this.progreso <= 90) {
                this.progreso += 10;
            }
            this.actualizarColorBarra();
        },
        decrementarProgreso() {
            if (this.progreso >= 10) {
                this.progreso -= 10;
            }
            this.actualizarColorBarra();
        },
        actualizarColorBarra() {
            if (this.progreso <= 40) {
                this.colorBarra = 'green';
            } else if (this.progreso <= 70) {
                this.colorBarra = 'yellow';
            } else {
                this.colorBarra = 'red';
            }
        }
    },
    mounted() {
        // Simula un tiempo de carga de 2 segundos
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }
}).mount('#app');
