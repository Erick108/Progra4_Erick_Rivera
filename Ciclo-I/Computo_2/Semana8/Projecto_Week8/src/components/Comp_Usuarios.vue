    <!--
        Realizar un componente que maneje una lista de usuarios, 
        esta lista de usuarios debe mostrarse en una tabla y tener los 
        campos de nombre, apellido, usuario, rol, estado.
        Por defecto el estado debe ser activo: un boton debe poder
        cambiar el estado de activo a inactivo y viceversa
        En la tabla solo se mostraran los usarios activos.
    -->
<script>
import { ref } from 'vue';

 export default{
    data(){
        return{
            nombre:"",
            apellido:"",
            usuario:"",
            rol:"",
            estado:"activo"
        }
    },
    methods:{
        agregar(){
            const usuarios = ref
        },
        cambio(event){
            this.estado = event.target.value
        }
    }
 }
</script>

<template>
    <h2>Ingreso de usuarios</h2>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Estado</th>
            </tr>
        </thead>
    </table>

</template>

<style>
table{
    border: 1;
    border-collapse: collapse;
    width: 100%;
}
</style>