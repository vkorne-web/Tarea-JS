// ============================================
// SIMULADOR DE TIENDA DE JAMONES - VERSIÓN SIMPLE
// ============================================

// 1. DECLARACIÓN DE VARIABLES, CONSTANTES Y ARRAYS
// --------------------------------------------

// Constantes de precios (precio por kg)
const PRECIO_JAMON_IBERICO = 8500;
const PRECIO_JAMON_SERRANO = 3200;
const PRECIO_PATA_NEGRA = 12500;

// Array con catálogo de productos
const jamones = [
    { id: 1, nombre: "Jamón 100% Ibérico", precioKg: PRECIO_JAMON_IBERICO },
    { id: 2, nombre: "Jamón Serrano", precioKg: PRECIO_JAMON_SERRANO },
    { id: 3, nombre: "Pata Negra", precioKg: PRECIO_PATA_NEGRA }
];

// Variable para guardar la compra actual
let compraActual = {
    producto: "",
    kilos: 0,
    precioTotal: 0
};

// 2. FUNCIÓN PRINCIPAL
// --------------------------------------------

function iniciarSimulador() {
    alert("🐷 ¡Bienvenido a CoderJamones! 🐷");
    
    let continuar = true;
    
    while (continuar) {
        let opcion = mostrarMenu();
        
        if (opcion === "1") {
            verCatalogo();
        } else if (opcion === "2") {
            realizarCompra();
        } else if (opcion === "3") {
            let confirmarSalida = confirm("¿Estás seguro que deseas salir?");
            if (confirmarSalida) {
                continuar = false;
                alert("¡Gracias por visitarnos! 🧀");
            }
        } else {
            alert("❌ Opción no válida. Elige 1, 2 o 3.");
        }
    }
}

// 3. FUNCIÓN PARA MOSTRAR MENÚ
// --------------------------------------------

function mostrarMenu() {
    return prompt(
        "=== MENÚ PRINCIPAL ===\n\n" +
        "1️⃣ Ver catálogo\n" +
        "2️⃣ Comprar jamón\n" +
        "3️⃣ Salir\n\n" +
        "Elige una opción:"
    );
}

// 4. FUNCIÓN PARA VER CATÁLOGO
// --------------------------------------------

function verCatalogo() {
    let mensaje = "📋 CATÁLOGO DE JAMONES 📋\n\n";
    
    for (let i = 0; i < jamones.length; i++) {
        mensaje += jamones[i].id + ". " + jamones[i].nombre + "\n";
        mensaje += "   Precio: $" + jamones[i].precioKg + " por kg\n\n";
    }
    
    alert(mensaje);
}

// 5. FUNCIÓN PARA REALIZAR COMPRA
// --------------------------------------------

function realizarCompra() {
    // Mostrar catálogo
    verCatalogo();
    
    // Pedir producto
    let productoElegido = prompt("¿Qué jamón quieres comprar? (Escribe 1, 2 o 3):");
    productoElegido = parseInt(productoElegido);
    
    // Buscar el producto seleccionado
    let productoEncontrado = null;
    
    if (productoElegido === 1) {
        productoEncontrado = jamones[0];
    } else if (productoElegido === 2) {
        productoEncontrado = jamones[1];
    } else if (productoElegido === 3) {
        productoEncontrado = jamones[2];
    } else {
        alert("❌ Número no válido. Volviendo al menú...");
        return;
    }
    
    // Pedir kilos
    let kilos = prompt("¿Cuántos kilos quieres? (Máximo 5 kg):");
    kilos = parseFloat(kilos);
    
    // Validar kilos
    if (isNaN(kilos) || kilos <= 0) {
        alert("❌ Cantidad no válida.");
        return;
    }
    
    if (kilos > 5) {
        alert("❌ Máximo 5 kg por compra.");
        return;
    }
    
    // Calcular precio total
    let precioTotal = productoEncontrado.precioKg * kilos;
    
    // Guardar compra actual
    compraActual = {
        producto: productoEncontrado.nombre,
        kilos: kilos,
        precioTotal: precioTotal
    };
    
    // Mostrar resumen y confirmar
    let resumen = "=== RESUMEN DE COMPRA ===\n\n";
    resumen += "Producto: " + compraActual.producto + "\n";
    resumen += "Kilos: " + compraActual.kilos + " kg\n";
    resumen += "Total: $" + compraActual.precioTotal + "\n\n";
    resumen += "¿Confirmar compra?";
    
    let confirmar = confirm(resumen);
    
    if (confirmar) {
        alert("✅ ¡Compra realizada con éxito!\nTotal: $" + compraActual.precioTotal);
    } else {
        alert("❌ Compra cancelada.");
    }
}

// 6. INICIAR EL SIMULADOR
// --------------------------------------------

iniciarSimulador();
