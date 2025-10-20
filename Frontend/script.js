let myChart = null;

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE PRUEBA ---
    const sampleCitizenData = {
        nombre: "Katniss Everdeen",
        distrito: 12,
        rol: "Tributo",
        area: "Distrito 12",
        desempeno: "Sobresaliente",
        evaluacionGeneral: 88.25,
        evaluationHistory: [90, 85, 90, 95, 88, 90, 85, 92, 85, 95, 90]
    };

    // --- 2. REFERENCIAS A ELEMENTOS DEL HTML ---
    const sampleDataBtn = document.getElementById('sample-data-btn');
    const roleSelector = document.getElementById('role-selector');
    const quantitativeSummaryDiv = document.getElementById('quantitative-summary');
    const oracleInterpretationDiv = document.getElementById('oracle-interpretation');
    const resultsArea = document.querySelector('.results-area');
    const controlPanel = document.querySelector('.control-panel');
    const resetBtn = document.getElementById('reset-btn');

    // --- 3. FUNCIONES ---
    function displayQuantitativeSummary(data) {
        const existingList = quantitativeSummaryDiv.querySelector('ul');
        if (existingList) existingList.remove();

        const list = document.createElement('ul');
        list.innerHTML = `
            <li><strong>Rol:</strong> ${data.rol}</li>
            <li><strong>Área:</strong> ${data.area}</li>
            <li><strong>Desempeño:</strong> ${data.desempeno}</li>
            <li><strong>Evaluación:</strong> ${data.evaluacionGeneral}%</li>
        `;
        quantitativeSummaryDiv.insertBefore(list, document.querySelector('.chart-container'));
    }

    function displayOracleInterpretation(data, role) {
        oracleInterpretationDiv.innerHTML = '<h3>Interpretación del Oráculo</h3>';
        let interpretationText = '';
        switch (role) {
            case 'student':
                interpretationText = `<p><strong>Informe para el Alumno:</strong> ${data.nombre}, tus resultados muestran una evaluación de ${data.evaluacionGeneral}%. Tu desempeño es ${data.desempeno}.</p>`;
                break;
            case 'teacher':
                interpretationText = `<p><strong>Reporte para el Maestro:</strong> El estudiante ${data.nombre} presenta una evaluación de ${data.evaluacionGeneral}%. Su desempeño general es ${data.desempeno}.</p>`;
                break;
            case 'principal':
                interpretationText = `<p><strong>Informe para el Director:</strong> ${data.nombre} (Distrito ${data.distrito}) muestra un rendimiento de ${data.evaluacionGeneral}%. Perfil de alto valor estratégico.</p>`;
                break;
        }
        oracleInterpretationDiv.innerHTML += interpretationText;
    }

    function processChartData(scores) {
        const frequency = {};
        for (const score of scores) {
            frequency[score] = (frequency[score] || 0) + 1;
        }
        const sortedScores = Object.entries(frequency).sort((a, b) => b[1] - a[1]).slice(0, 3);
        return {
            labels: sortedScores.map(item => `Calificación: ${item[0]}`),
            data: sortedScores.map(item => item[1])
        };
    }

    function createPieChart(chartData) {
        const ctx = document.getElementById('evaluationChart').getContext('2d');
        if (myChart) myChart.destroy();
        
        myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Frecuencia',
                    data: chartData.data,
                    backgroundColor: ['rgba(187, 134, 252, 0.8)', 'rgba(142, 68, 173, 0.8)', 'rgba(240, 228, 255, 0.8)'],
                    borderColor: '#1e1e1e',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', labels: { color: '#e0e0e0' } },
                    title: { display: true, text: 'Top 3 Calificaciones Más Comunes', color: '#e0e0e0' }
                }
            }
        });
    }

    // --- 4. EVENT LISTENERS ---
    sampleDataBtn.addEventListener('click', () => {
        const selectedRole = roleSelector.value;
        displayQuantitativeSummary(sampleCitizenData);
        displayOracleInterpretation(sampleCitizenData, selectedRole);
        const chartData = processChartData(sampleCitizenData.evaluationHistory);
        createPieChart(chartData);
        resultsArea.classList.remove('hidden');
        controlPanel.classList.add('hidden');
    });
    
    roleSelector.addEventListener('change', () => {
        const selectedRole = roleSelector.value;
        displayOracleInterpretation(sampleCitizenData, selectedRole);
    });

    resetBtn.addEventListener('click', () => {
        resultsArea.classList.add('hidden');
        controlPanel.classList.remove('hidden');
        if (myChart) myChart.destroy();
    });
});