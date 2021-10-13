Tipos de datos: 

- Primitivos:
* String
* Number
* Boolean
* Symbol
==============
- Compuestos:
* Objetos literales
* Funciones
* Clases
* Arreglos

==============================================================
==================== Tipos Primitivos ========================
--------------------------------------------------------------
==================== Strings en TypeScript ===================
==============================================================
Comilla doble:
--------------
"Soy un string con comilla doble"
==================================
Comilla simple:
---------------
'Soy un string con comilla simple'
==================================
Backtick:
---------
`Soy un String con BackTick`

========================================================
==================== Tipos numéricos ===================
========================================================
no llevan comillas.
Por ejemplo:

PI = 3.14
---------- 
Salario = 1400.01
-----------------
age = 30

======================================================
==================== Tipos Boolean ===================
======================================================
Valores de verdadero y falso
Ejemplos:

isActive = true
---------------
keepAlive = false

================================================================
==================== Tipos Null y Undefined ====================
================================================================
Null: cuando un valor es nulo
Undefined: cuando no se a asignado un valor a una propiedad

Ejemplos:

age = null
----------
hero = undefined

=====================================================
==================== Tipo Symbol ====================
=====================================================
symbol no va con la palabra reservad new por que no es una instancia
- ¿Para que sirven?
Es para utilizar una característica específica en la propiedad creada

Ejemplos:

sym = Symbol()
--------------
sym2 = Symbol('miPropiedad')

================================================================
==================== Tipos Compuestos ==========================
----------------------------------------------------------------
==================== Tipo Objetos literales ====================
================================================================
O también conocidos como diccionarios,
Ejemplo: 

persona = {

    name: 'Jhonatan',
    Age: 35

}

====================================================
==================== Tipo Class ====================
====================================================

Ejemplo:

class persona = {

    name;
    Age; 

}

========================================================
==================== Tipo functions ====================
========================================================

Ejemplos:

function diHola() = {} 
----------------------
const diHola1 = () => {}
