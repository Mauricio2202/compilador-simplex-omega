# Configuración del evento clic

![alt text](image-1.png)

# Obtención y limpieza de entradas
### Obtiene el código ingresado por el usuario
### consoleOuput muestra la salida.
![alt text](image-2.png)

# Daclaración de variables globales
### Este objeto se usa para almacenar las variables.
![alt text](image-3.png)

# Función ptf
### Agrega un texto a la salida y termina con un salto de línea.
![alt text](image-4.png)

# Función principal evaluateCode
### Se divide el código en un arreglo, en donde cada elemento representa una línea de texto.
![alt text](image-5.png)

# Recorrido de líneas
## Se eliminan los espacios en blanco al inicio y al final
![alt text](image-6.png)

# Manejo de ptf
* Detecta si una línea es una llamada ptf
* Y extrae el contenido de los paréntesis

![alt text](image-7.png)
* Luego divide el contenido por el operador + para manejar concatenaciones

![alt text](image-9.png)

* Cada fragmento part se evalúa:
* Si está entre **comillas** --> se extrae el texto
* Si es una **variable válida** --> se obtiene su valor
* Si es una variable del **0 al 9** --> Se añade como número
* Si **no cumple** con ninguna de estas condiciones --> Se lanza un error indicando que la variable **no está definida**
* Finalmente el resultado se imprimie usando **ptf**

![alt text](image-10.png)

# Declaración de variables
![alt text](image-11.png)

* Se verifica si la línea comienza con un **int**
* Divide la línea por el símbolo **=** para separar el nombre de la variable y su valor.

* Se extrae el nombre de la variable validando que sea una letra de la **a - z** o que el valor esté entre **0 - 9**
* En caso de error manda un mensaje con ptf

# Condicional if
* Detecta condiciones con la palabra clave if
* Extrae la condición entre paréntesis

![alt text](image-13.png)

* Se evalúa la condición para los operadores **<, >, <=, >=**
* Divide  la condición en partes **(izquierda, operador, derecha)** y las evalúa:

![alt text](image-14.png)

* Convierte cada lado en números o busca en las variables definidas

# Si ambas partes son válidas
* Si la condición es verdadera, imprime un mensaje indicando el resultado

![alt text](image-15.png)

# Código procesado
## Al finalizar, la función procesa todo el código ingresado y muestra los resultados en consoleOuput.
![alt text](image-16.png)

> Esto es Simplexito