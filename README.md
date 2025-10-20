# 🏛️ El Oráculo del Capitolio – DistritoG  

**Sistema de Interpretación Inteligente Multi-Perspectiva**  
**Hackatón SISI 2025 – Edición Relámpago**  
**Instituto Tecnológico de Mérida**

---

## 🎯 Objetivo del sistema

Construir una plataforma web capaz de **interpretar la esencia de cada ciudadano desde múltiples perspectivas**, generando descripciones narrativas personalizadas —tanto cualitativas como cuantitativas— a partir de datos estructurados.

---

## 🧠 Funcionamiento del sistema

**El Oráculo del Capitolio**, desarrollado por **DistritoG**, interpreta perfiles ciudadanos combinando análisis estadístico y generación narrativa mediante modelos de lenguaje.  
El sistema **no requiere instalación local** y puede consultarse directamente desde su versión desplegada.

---

### 🔍 Entrada de datos

El sistema recibe como entrada un archivo estructurado (`.csv` o `.json`) con indicadores relevantes de cada ciudadano, tales como:

- Nombre  
- Rol  
- Area
- Desempeño
- Evaluación 

Estos datos pueden cargarse desde la interfaz o utilizarse a partir de conjuntos de prueba.

---

### 📊 Análisis cuantitativo

Una vez cargados los datos, el sistema realiza un análisis estadístico que incluye:

- Cálculo de promedios y porcentajes  
- Detección de **outliers**  
- Visualización gráfica de indicadores clave  

Este módulo ofrece una comprensión rápida del perfil técnico del ciudadano.

---

### 🗣️ Interpretación narrativa multi-perspectiva

El núcleo del sistema es su **generador narrativo adaptable al rol del lector**.  
A través de un selector de perfil, el usuario puede elegir entre distintas perspectivas:

- 👩‍🎓 Estudiante  
- 👨‍👩‍👧 Padre o madre  
- 🧑‍🏫 Tutor académico  
- 🩺 Médico o psicólogo  
- 🧾 Evaluador institucional  

Cada rol recibe una narrativa distinta, generada por un **modelo de lenguaje (LLM)** como *OpenAI, HuggingFace, Gemini, Groq* u *Ollama*.  
Los *prompts* están diseñados para adaptarse dinámicamente, generando interpretaciones **empáticas, técnicas o institucionales** según el caso.

---

### 🧭 Comparación de perspectivas

El sistema permite visualizar simultáneamente múltiples interpretaciones del mismo ciudadano, facilitando la **toma de decisiones desde distintos ángulos**.  
Esta vista comparativa es especialmente útil en contextos educativos, clínicos o administrativos.

---

### 🔐 Variables de entorno y despliegue

El sistema está desplegado en línea y configurado mediante variables de entorno (`.env`), que definen:

- Claves de API  
- Rutas de datos  
- Parámetros de ejecución  

El usuario final **no necesita acceso a estas variables** para utilizar el sistema; se documentan únicamente para propósitos técnicos y de auditoría.

---

## 📁 Entregables institucionales

- 🌐 **URL del sitio desplegado**  
- 💻 **Repositorio público** con:
  - Código fuente completo  
  - Archivo `README.md` con descripción funcional  
  - Archivo de configuración (`package.json`, `requirements.txt`, etc.)  
  - Archivo `.env.example` con las variables esperadas  
  - Datos de prueba (`.csv` o `.json`)  

---

## 👥 Equipo

**DistritoG**  
*Anguas Pol Enrique Alejandro*, 
*Cumi Guzman Brian Azael*,  
*Lopez Ku Luis Fernando*, 
*Gabriel Ernesto Tamayo Herrera*  
*y otros...*   
Instituto Tecnológico de Mérida  

---

> “El Capitolio observa con atención. No basta con sobrevivir al reto; deben desplegarlo, documentarlo y presentarlo con orgullo.”  
