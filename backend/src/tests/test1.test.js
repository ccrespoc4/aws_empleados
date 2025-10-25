const request = require("supertest");
const app=require ('../routes/empleados.routes');

describe('GET /empleados', function () {
    it('Test Consulta de todos los empleados',
        function() {
            request(app)
            .get('/empleados')
            .set('Accept', 'application/json')
            .expect('Content-Type', '/json/')
            .expect(200)


        }
    );
});

describe('GET /empleados', function () {
    it('Test Consulta Un empleado inexistente',
        function() {
            request(app)
            .get('/empleados/1234')
            .set('Accept', 'application/json')
            .expect('Content-Type', '/json/')
            .expect(404)


        }
    );
});

describe('POST /empleados',()=>{
    it('Test Creacion Usuario', ()=> {
        const data={
            nombre:'Luis Perez',
            cargo:'administrador',
            departamento: 'Financiero',
            sueldo:2000

        }
        request(app)
        .post('/empleados')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
    });
});

describe('POST /empleados',()=>{
    it('Test Creacion Fallida Usuario', ()=> {
        const data={}
        request(app)
        .post('/empleados')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(404)
    });
});