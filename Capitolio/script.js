// Archivo: script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DATOS DE PRUEBA (sin cambios) ---
    const sampleCitizenData = {
        nombre: "Katniss Everdeen",
        distrito: 12,
        habilidades: {
            supervivencia: 95,
            punteria: 98,
            carisma: 75,
            estrategia: 85
        },
        evaluacionGeneral: 88.25,
        asistencia: 92,
        colaboracion: 78
    };

    // --- 2. REFERENCIAS A ELEMENTOS DEL HTML (añadimos el selector) ---
    const sampleDataBtn = document.getElementById('sample-data-btn');
    const roleSelector = document.getElementById('role-selector'); // <-- Nueva referencia
    const quantitativeSummaryDiv = document.getElementById('quantitative-summary');
    const oracleInterpretationDiv = document.getElementById('oracle-interpretation');
    
    // Variable para guardar los datos actuales
    let currentData = null;

    // --- 3. FUNCIONES PARA ACTUALIZAR LA INTERFAZ ---
    function displayQuantitativeSummary(data) {
        quantitativeSummaryDiv.innerHTML = '<h3>Resumen Cuantitativo</h3>';
        const list = document.createElement('ul');
        list.innerHTML = `
            <li><strong>Nombre:</strong> ${data.nombre}</li>
            <li><strong>Evaluación General:</strong> ${data.evaluacionGeneral}%</li>
            <li><strong>Asistencia:</strong> ${data.asistencia}%</li>
            <li><strong>Colaboración:</strong> ${data.colaboracion}%</li>
        `;
        quantitativeSummaryDiv.appendChild(list);
    }

    /**
     * FUNCIÓN ACTUALIZADA: Ahora genera texto según el rol.
     * Aquí es donde conectarías el LLM en el futuro.
     */
    function displayOracleInterpretation(data, role) {
        oracleInterpretationDiv.innerHTML = '<h3>Interpretación del Oráculo</h3>';
        let interpretationText = '';

        // Usamos un switch para generar un "prompt" o texto diferente para cada rol
        switch (role) {
            case 'student':
                interpretationText = `<p><strong>Hola, ${data.nombre}.</strong> Tus resultados muestran una <strong>evaluación general de ${data.evaluacionGeneral}%.</strong> ¡Sigue así! Tu punto más fuerte es la puntería, lo que indica una gran concentración. Considera participar en actividades que mejoren tu colaboración.</p>`;
                break;
            case 'teacher':
                interpretationText = `<p><strong>Reporte del estudiante ${data.nombre}:</strong> Presenta una evaluación general de <strong>${data.evaluacionGeneral}%.</strong> Se recomienda fomentar su participación en equipos para desarrollar la habilidad de colaboración (actualmente en ${data.colaboracion}%). Muestra una asistencia consistente del ${data.asistencia}%.</p>`;
                break;
            case 'principal':
                interpretationText = `<p><strong>Informe Ejecutivo - ${data.nombre} (Distrito ${data.distrito}):</strong> El activo muestra un rendimiento global del <strong>${data.evaluacionGeneral}%.</strong> Su perfil es de alto valor estratégico debido a sus habilidades de supervivencia y puntería. Se aconseja monitorear su progreso y potencial de liderazgo.</p>`;
                break;
            default:
                interpretationText = '<p>Selecciona una perspectiva para generar la interpretación.</p>';
        }

        oracleInterpretationDiv.innerHTML += interpretationText;
    }

    // --- 4. EVENT LISTENERS PARA LOS CONTROLES ---
    sampleDataBtn.addEventListener('click', () => {
        currentData = sampleCitizenData; // Guardamos los datos
        const selectedRole = roleSelector.value;
        displayQuantitativeSummary(currentData);
        displayOracleInterpretation(currentData, selectedRole);
    });
    
    // <-- NUEVO EVENT LISTENER para el menú desplegable -->
    roleSelector.addEventListener('change', () => {
        // Solo actualiza la interpretación si ya se cargaron datos
        if (currentData) {
            const selectedRole = roleSelector.value;
            displayOracleInterpretation(currentData, selectedRole);
        }
    });
});