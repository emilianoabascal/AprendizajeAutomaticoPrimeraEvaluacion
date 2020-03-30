# Proyecto Aprendizaje automatico 
Enrique Lira Martinez A01023351<br/>
Emiliano Abascal Gurria A01023234<br/>
Esmeralda Magdaleno Morales A01023086 <br/>

# Enunciado del problema
En este pequeño proyecto, se implemento un modelo de regresión lineal  que predice el puntaje de un maestro individual al final del año. "score3" o la calificación final será nuestra etiqueta (salida) y el resto de las columnas serán nuestras características (entradas). Primero, exploraré los datos para ver si podemos comprender cuál es la historia detrás de los datos, este conjunto de datos contiene 28 preguntas que dividimos en 3 secciones, cada sección se conoce como un año escolar.

# Prerrequisitos
- `Docker`

# Quickstart
Guia para correr el programa de manera rápida

1. Clonar repositorio 
```bash 
git clone https://github.com/emilianoabascal/AprendizajeAutomaticoPrimeraEvaluacion
``` 
2. Ir hacia la carpeta
```bash 
cd AprendizajeAutomaticoPrimeraEvaluacion
``` 
3. Abrir docker

4. Run docker 
```bash 
docker-compose up 
``` 
5. Buscar la dirreccion localhost:5000 

6. Da click en el boton de train para entrenar el modelo con el dataset

7. Ingresa los valores a predecir 


# Uso
Esta es una explicación más detallada de los archivos y funciones principales que se usan.

### Archivos
Archivos principales

#### App.py
Función: `home()`
Función que se utiliza para que la API envíe el archivo index.html.
Función: `predict()`
Función que se utiliza para predecir los valores, la función se llama cuando se hace una solicitud HTTP que recive un JSON con la infomración introducida en el Front End, realiza las predicciones necesarias y regresa un resultado al cliente en un JSON.
función: `trainModel()`
Función que se utiliza para volver a entrenar el modelo, la función se llama cuando se hace una solicitud HTTP que recive un JSON con la infomración introducida en el Front End, realiza el entrenamiento y regresa una respuesta booleana para avisar al cliente si el entrenamiento fue exitoso o no.
#### Train.py
función: `Train()`
Importamos nuestro dataset, este conjunto de datos contiene 28 preguntas que dividimos en 3 secciones, cada sección se conoce como un año escolar este se divide en el conjunto de datos de entrenamiento y Prueba

Se ajusta el modelo de regresión lineal múltiple a nuestro conjunto de entrenamiento. Utilizamos el método de ajuste junto con los argumentos del método de ajuste, los cuales serán conjuntos de entrenamiento y luego creamos un modelo de archivo que contiene el modelo de entrenamiento.
···
