
## Bienvenido/a al proyecto SEXDISC 

Este proyecto utiliza Vite como herramienta de desarrollo.

#### Configuración:

A continuación, te detallamos los pasos necesarios para iniciar el proyecto en tu entorno local.

Paso 1. Asegúrate de tener Node.js y npm instalados en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias necesarias: 

###### npm install

Paso 2. El proyecto requiere ciertas credenciales y configuraciones que deben ser proporcionadas a través de un archivo .env. Asegúrate de crear este archivo en la raíz del proyecto y solicitar al desarrollador las variables de entorno necesarias.

Paso 3. Después de copiar la información requerida, puedes iniciar el servidor localmente con el siguiente comando: 

###### npm run dev


#### Página Principal:

La página principal presenta un diseño con un menú de navegación y secciones de productos que ofrecen una amplia variedad de categorías, como vinilos, CDs, cassettes y camisetas. Destacando el nuevo material disponible con imágenes atractivas, invita a los usuarios a explorar todos los productos mediante un llamado a la acción.

Los productos se cargan dinámicamente desde Firebase y se presentan en tarjetas con imágenes, descripciones y precios. Además, se implementa un carrito de compras interactivo que muestra la cantidad de productos añadidos en tiempo real.


![](/public/imgREADME/inicio.png)

![](/public/imgREADME/inicio2.png)


#### Detalle del Producto:

Al acceder a cada tarjeta de producto, se muestra un detalle que incluye información sobre el artículo seleccionado, así como la disponibilidad en stock. Además, se presenta un botón que facilita agregar el artículo al carrito de compras.

![](/public/imgREADME/detalle.png)

#### Carrito de Compras:

La página del carrito muestra los productos seleccionados con detalles completos, como imágenes, descripciones, precios y cantidades. Permite la actualización de cantidades y proporciona la opción de eliminar productos del carrito. También muestra el monto total de la compra y ofrece un botón para confirmar la misma. Al hacer clic en "Confirmar", se dirige al usuario a un formulario de checkout.

![](/public/imgREADME/carrito.png)

#### Checkout:

Durante el proceso de checkout, los usuarios tienen la oportunidad de revisar y confirmar los productos seleccionados, recibiendo un resumen detallado de su compra. Además, se les solicita completar un formulario con información personal necesaria para finalizar la transacción de manera exitosa. Una vez completada la compra, se muestra un mensaje de alerta confirmando la orden junto con el número de referencia de la compra para su seguimiento.

![](/public/imgREADME/checkout.png)

#### Funcionalidades añadidas:

La aplicación utiliza Toastify y sweetalert2 para notificar al usuario sobre acciones como agregar productos al carrito, eliminar productos o al finalizar la compra. Se utiliza Local Storage para almacenar información sobre productos y el carrito, permitiendo una experiencia de usuario persistente. Se han implementado funciones para filtrar productos por categoría y para mostrar todos los productos disponibles. Se ha aplicado un diseño atractivo y responsivo con el uso de Tailwind CSS y se han agregado los iconos desde https://tabler.io .

![](/public/imgREADME/confirmacion.png)
![](/public/imgREADME/funcionalidades.png)


#### Uso de Firebase

Este proyecto utiliza Firebase como plataforma para gestionar una base de datos de productos y registrar información de las órdenes realizadas desde la aplicación.

##### Base de Datos de Productos

Utilizamos Firebase para mantener una base de datos de productos. Esta base de datos nos permite almacenar y recuperar información sobre los productos disponibles en nuestra aplicación, como sus nombres, descripciones, precios y disponibilidad en stock. 

##### Registro de Órdenes

Además de gestionar la información de los productos, Firebase también nos permite registrar información sobre las órdenes realizadas desde la aplicación. Cada vez que un usuario completa una compra, la información relevante, como los productos comprados, la cantidad, el precio total y los detalles del usuario, se almacenan en Firebase.


![](/public/imgREADME/firebase.png)


En resumen, este proyecto es una tienda en línea que ofrece una experiencia de compra atractiva y fácil de usar para los amantes de la música extrema. La implementación de características como la notificación de productos añadidos y la persistencia de datos mejora la usabilidad general del sitio.

