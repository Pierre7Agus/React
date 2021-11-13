<h1 align="center" >Conceptos de React</h1>

## Índice


- [Índice](#índice)
- [React](#react)
- [Sintaxis JSX](#sintaxis-jsx)
- [Componentes](#componentes)
- [Propiedades/props](#propiedadesprops)
- [Estado](#estado)
- [Inmutabilidad](#inmutabilidad)

---

<br/>

## React

<details style="border: 1px outset #444; padding:5px;cursor:pointer" >
<summary>Visualizar la información</summary>
<br/>

- [React](https://es.reactjs.org/), es una biblioteca de JavaScript para construir interfaces de usuario.

- Es **declarativo**

- Se basa en **componentes**
  
- Tiene el objetivo de facilitar el desarrollo de aplicaciones de una sola página ( Simple Page Aplication )

- Fue creada por Facebook, es de código abierto, es mantenida por la comunidad de software libre y por Facebook.
</details>

---
<br/>

## Sintaxis JSX

<details style="border: 1px outset #444; padding:5px;cursor:pointer">
<summary>Visualizar la información</summary>
<br/>

- React usa una sintaxis especial conocida como XML de JavaScript ( **JSX** ).

- JSX le permite integrar HTML y JavaScript en un mismo archivo e incluso en una misma línea de código.

- Usando **JSX** puede basarse en la sintaxis de JavaScript para inyectar la lógica de su aplicación dentro de "elementos HTML".

</details>

<br/>

> JSX se basa en un lenguaje de marcado extensible ( XML ), debido a esto incluye un par de restricciones importantes:  
> - Todos los elementos deben colocarse dentro de un elemento principal.
> - Todos los elementos deben tener una etiqueta de cierre.

> Use los **handlebars**  `{ }` para poder escribir código JavaScript, y de esa manera poder generar datos dinámicos.

---
<br/>

## Componentes

<details style="border: 1px outset #444; padding:5px;cursor:pointer" >
  <summary>Visualizar la información</summary>
  <br/>

- El desarrollo de React se basa en componentes

- Los componentes se usan para dividir lógicamente la aplicación ( **modularidad** ).

- Los componentes son unidades independientes que estan diseñados para **reutilización de código** y para la **modularidad**

- Se puede crear componentes utilizando funciones o clases.


</details>
<br/>

---

<br/>

## Propiedades/props

<details style="border: 1px outset #444; padding:5px;cursor:pointer">
<summary>Visualizar la información</summary>
<br/>

- > Las props, son valores **inmutables**, es decir, son de solo **lectura** ( no se puede modificar el valor de las props ).

- Las props, almacenan todos los datos que le pases al componente, es decir, una sola variable almacena toda esa información, una opción para obtener esos datos sería utilizar la desestructuración.

- Gracias a las **props** existe la posibilidad de que el comportamiento y la interfaz de nuestros componentes cambien.

</details>
<br/>

---

<br/>

## Estado

<details style="border: 1px outset #444; padding:5px;cursor:pointer">
<summary>Visualizar la información</summary>
<br/>

- **El estado** almacena los datos que esperamos cambiar durante el ciclo de vida de la aplicación.

- Básicamente, si el valor puede cambiar, debe formar parte del estado de la aplicación.

- **El estado** *son* los datos que se pueden cambiar y compartir entre los componentes de la aplicación.

- Cualquier **tipo de datos** u **objetos** de JavaScript se pueden registrar como estado en React.

- >**React** administra el **estado** de varias maneras. Una de las principales formas es mediante los **Hooks**

</details>
<br/>

---
<br/>

## Inmutabilidad

<details style="border: 1px outset #444; padding:5px;cursor:pointer">
<summary>Visualizar la información</summary>
<br/>

- Uno de los principios básicos de React es el concepto de inmutabilidad.
  
- La **inmutabilidad** significa que los valores no se actualizan, sino que se establecen en nuevas copias de los datos.

- Al mantener el estado inmutable, **React** puede determinar mejor lo que ha cambiado, ya que los valores originales siguen existiendo. Este uso continuo de nuevas copias permite almacenar el historial o aplicar otras funciones avanzadas.

</details>
<br/>

---
<br/>