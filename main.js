// 📚 Array de libros inicial
let libros = [
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    estado: "leido",
    genero: "Ficción",
    frase: "Lo esencial es invisible a los ojos."
  },
  {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    estado: "leyendo",
    genero: "Realismo mágico",
    frase: ""
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    estado: "pendiente",
    genero: "Distopía",
    frase: ""
  }
];

let filtroActual = ""; // estado activo: leido, leyendo, pendiente

// 🔁 Renderiza la lista de libros
function renderizarLibros() {
  const contenedor = document.getElementById("bookList");
  contenedor.innerHTML = "";

  const input = document.getElementById("searchInput");
  const busqueda = input ? input.value.toLowerCase() : "";

  libros
    .filter(libro => {
      const coincideEstado = filtroActual ? libro.estado === filtroActual : true;
      const coincideBusqueda =
        libro.titulo.toLowerCase().includes(busqueda) ||
        libro.autor.toLowerCase().includes(busqueda);
      return coincideEstado && coincideBusqueda;
    })
    .forEach(libro => {
      const card = document.createElement("div");
      card.className = "bg-white border border-gray-300 rounded p-4 w-52 shadow";

      card.innerHTML = `
        <h3 class="text-lg font-semibold mb-1">${libro.titulo}</h3>
        <p class="text-sm text-gray-600">Autor: ${libro.autor}</p>
        <p class="text-sm text-gray-600">Género: ${libro.genero}</p>
        <span class="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full text-white ${
          libro.estado === "leido"
            ? "bg-green-500"
            : libro.estado === "leyendo"
            ? "bg-yellow-500"
            : "bg-red-500"
        }">${libro.estado}</span>
        ${libro.frase ? `<div class="mt-2 border-l-4 border-indigo-300 pl-2 italic text-sm text-gray-700">"${libro.frase}"</div>` : ""}
      `;

      contenedor.appendChild(card);
    });
}

// 🔎 Buscador
function searchBooks() {
  renderizarLibros();
}

// 🟣 Filtro por estado
function filterBooks(estado) {
  filtroActual = estado;
  renderizarLibros();
}

// ➕ Simulación botón "añadir libro"
function addNewBook() {
  alert("Aquí se abriría la pantalla para añadir un nuevo libro 😊");
}

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", renderizarLibros);

