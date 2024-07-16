// FetchData.js
import productos from './productos.json'; // Importa el archivo JSON de productos

export default function fetchData() {
    return new Promise(resolve => {
        console.log('Se esta resolviendo')
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
}
