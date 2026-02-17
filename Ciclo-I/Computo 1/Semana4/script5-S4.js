// Array de 10 personas con información personal
const personas = [
    {
        id: 1,
        nombre: "María García",
        edad: 28,
        ciudad: "San Salvador",
        profesion: "Ingeniera de Software",
        telefono: "7890-1234",
        email: "maria.garcia@email.com"
    },
    {
        id: 2,
        nombre: "Carlos Méndez",
        edad: 35,
        ciudad: "Santa Ana",
        profesion: "Médico",
        telefono: "7123-4567",
        email: "carlos.mendez@email.com"
    },
    {
        id: 3,
        nombre: "Ana López",
        edad: 42,
        ciudad: "San Miguel",
        profesion: "Profesora",
        telefono: "7234-5678",
        email: "ana.lopez@email.com"
    },
    {
        id: 4,
        nombre: "Roberto Hernández",
        edad: 31,
        ciudad: "San Salvador",
        profesion: "Abogado",
        telefono: "7345-6789",
        email: "roberto.hernandez@email.com"
    },
    {
        id: 5,
        nombre: "Lucía Ramírez",
        edad: 26,
        ciudad: "Sonsonate",
        profesion: "Diseñadora Gráfica",
        telefono: "7456-7890",
        email: "lucia.ramirez@email.com"
    },
    {
        id: 6,
        nombre: "Javier Torres",
        edad: 39,
        ciudad: "La Libertad",
        profesion: "Contador",
        telefono: "7567-8901",
        email: "javier.torres@email.com"
    },
    {
        id: 7,
        nombre: "Sofía Cruz",
        edad: 24,
        ciudad: "Ahuachapán",
        profesion: "Estudiante",
        telefono: "7678-9012",
        email: "sofia.cruz@email.com"
    },
    {
        id: 8,
        nombre: "Miguel Álvarez",
        edad: 45,
        ciudad: "San Salvador",
        profesion: "Arquitecto",
        telefono: "7789-0123",
        email: "miguel.alvarez@email.com"
    },
    {
        id: 9,
        nombre: "Elena Díaz",
        edad: 33,
        ciudad: "Usulután",
        profesion: "Enfermera",
        telefono: "7890-1235",
        email: "elena.diaz@email.com"
    },
    {
        id: 10,
        nombre: "Daniel Flores",
        edad: 29,
        ciudad: "San Vicente",
        profesion: "Chef",
        telefono: "7901-2345",
        email: "daniel.flores@email.com"
    }
];

// Elementos del DOM
const inputBusqueda = document.getElementById('busqueda');
const selectFiltro = document.getElementById('filtro');
const listaPersonas = document.getElementById('listaPersonas');

// Eventos
inputBusqueda.addEventListener('input', buscarPersonas);
selectFiltro.addEventListener('change', buscarPersonas);

// Función principal para buscar y mostrar personas
function buscarPersonas() {
    const termino = inputBusqueda.value.toLowerCase().trim();
    const filtro = selectFiltro.value;
    
    // Filtrar personas según el término y el filtro
    const resultados = personas.filter(persona => {
        if (filtro === 'todos') {
            // Buscar en todos los campos
            return (
                persona.nombre.toLowerCase().includes(termino) ||
                persona.edad.toString().includes(termino) ||
                persona.ciudad.toLowerCase().includes(termino) ||
                persona.profesion.toLowerCase().includes(termino) ||
                persona.telefono.includes(termino) ||
                persona.email.toLowerCase().includes(termino)
            );
        } else if (filtro === 'nombre') {
            return persona.nombre.toLowerCase().includes(termino);
        } else if (filtro === 'edad') {
            return persona.edad.toString().includes(termino);
        } else if (filtro === 'ciudad') {
            return persona.ciudad.toLowerCase().includes(termino);
        } else if (filtro === 'profesion') {
            return persona.profesion.toLowerCase().includes(termino);
        }
        return false;
    });
    
    // Mostrar resultados
    mostrarResultados(resultados);
}

// Función para mostrar los resultados en la lista
function mostrarResultados(personasFiltradas) {
    if (personasFiltradas.length === 0) {
        listaPersonas.innerHTML = `
            <div class="no-resultados">
                <p>No se encontraron resultados</p>
            </div>
        `;
    } else {
        let html = '';
        personasFiltradas.forEach(persona => {
            html += `
                <div class="persona">
                    <p><strong>Nombre:</strong> ${persona.nombre}</p>
                    <p><strong>Edad:</strong> ${persona.edad} años</p>
                    <p><strong>Ciudad:</strong> ${persona.ciudad}</p>
                    <p><strong>Profesión:</strong> ${persona.profesion}</p>
                    <p><strong>Teléfono:</strong> ${persona.telefono}</p>
                    <p><strong>Email:</strong> ${persona.email}</p>
                </div>
            `;
        });
        listaPersonas.innerHTML = html;
    }
}

// Mostrar todas las personas al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    mostrarResultados(personas);
});