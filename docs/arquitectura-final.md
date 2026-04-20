# Arquitectura final

En este proyecto se ha desarrollado una interfaz en React con TypeScript aplicando varias características avanzadas del tipado estático para mejorar la seguridad, reutilización y mantenibilidad del código.

## Uso de genéricos

Se ha implementado un componente genérico `DataTable<T>`, capaz de representar datos de distintos tipos sin tener que duplicar lógica. Gracias al uso del genérico `T`, el componente puede reutilizarse con diferentes estructuras de datos manteniendo el tipado correcto en cada caso.

Además, las columnas se definen mediante `keyof T`, lo que garantiza que solo se puedan utilizar claves que realmente existan en el tipo de dato representado. Esto reduce errores frecuentes al acceder a propiedades inexistentes.

## Uso de tipos de utilidad

Se ha utilizado el tipo de utilidad `Partial<T>` para gestionar el estado de edición de una fila. Esto permite almacenar temporalmente una entidad incompleta mientras el usuario modifica sus datos, sin obligar a que todos los campos estén presentes desde el inicio.

Este enfoque resulta útil en formularios o procesos de edición progresiva, y hace que el estado sea más flexible sin perder el control de tipos.

## Uso del tipo `never`

En el módulo anterior se aplicó análisis exhaustivo con `never` dentro de una estructura `switch`. Esta técnica permite que TypeScript detecte en tiempo de compilación si falta por manejar algún caso de una unión discriminada.

Gracias a ello, si en el futuro se añade un nuevo estado y no se actualiza la función correspondiente, el compilador avisará inmediatamente. Esto mejora la escalabilidad y evita errores lógicos en tiempo de ejecución.

## Uso de uniones discriminadas

Las uniones discriminadas permiten modelar distintos estados posibles de una entidad de forma segura, utilizando una propiedad común que diferencia cada caso. Esto facilita el uso de estructuras de control como `switch` y mejora la legibilidad del código.

Combinadas con `never`, ayudan a garantizar que todos los escenarios estén correctamente cubiertos.

## Librerías externas con tipado estricto

También se ha integrado la librería `date-fns` para calcular la diferencia en días entre dos fechas mediante una función utilitaria en TypeScript. Esta función recibe dos parámetros de tipo `Date` y devuelve un valor de tipo `number`, manteniendo un contrato claro de entrada y salida.

Esto demuestra cómo TypeScript permite usar librerías externas de forma segura, reduciendo errores derivados del mal uso de parámetros o retornos.

## Comparación con JavaScript estándar

Si este mismo proyecto se hubiera desarrollado en JavaScript estándar, existiría una mayor probabilidad de cometer errores en tiempo de ejecución, como acceder a propiedades inexistentes, pasar tipos incorrectos a funciones, olvidar contemplar casos en un `switch` o reutilizar componentes sin garantías sobre la estructura de los datos.

En cambio, con TypeScript muchos de estos errores se detectan antes de ejecutar la aplicación, durante el desarrollo o la compilación. Esto mejora la robustez del proyecto, facilita su mantenimiento y reduce la carga de errores en runtime.

## Conclusión

La combinación de genéricos, uniones discriminadas, `never` y tipos de utilidad permite construir aplicaciones más seguras, escalables y fáciles de mantener. En este proyecto, su uso ha contribuido a reducir errores potenciales y a mejorar la calidad general del código frente a una implementación equivalente en JavaScript sin tipado.