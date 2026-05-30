const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log('Hola mundo en consola!!');
    res.send('Servidor listo y corriendo!');
});
// Ruta para mostrar la lista de alumno
app.get('/nombres', (req, res) => {
    const alumnos = [
        'Eduardo',
        'Alberto',
        'Diego',
        'Alexis',
        'Gael',
        'Estrada'
    ];

    res.send(alumnos.join('<br>'));
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
















