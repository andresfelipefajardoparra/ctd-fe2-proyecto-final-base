
import {expect, jest, test} from '@jest/globals';
import Cita from "../features/quote/Cita";
import { fireEvent, render, screen } from "../test-utils";
import { server } from "../mocks/server";



//Test 1
// describe('Pruebas en <Citas />', () => {
//     test('Busqueda de cita por personaje', async () => {
//         render(<Cita />)

//         const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
//         fireEvent.change(input, { target: { value: 'Lisa' } })
//         const button = screen.getByRole('button', { name: 'Obtener Cita' });
//         fireEvent.click(button);
//         expect(await screen.findByText("These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.")).toBeInTheDocument()
//     })

// });

//Test 2
// describe('Pruebas en <Citas /> random', () => {
//     test('Busquyeda de cita por personaje', async () => {
//         render(<Cita />)
        
//         const handleClick = jest.fn();
//         render(<button onClick={handleClick}>Obtener cita aleatoria</button>);
//         const button = screen.getByLabelText('Obtener cita aleatoria');
//         fireEvent.click(button);
//         // expect(await screen.findByText("But my mom says I'm cool."));
//         expect(button).toBeInTheDocument("But my mom says I'm cool.");
//     })
// });

//Test 3
// describe('Pruebas en el parrafo', () => {
//     test('Mostrar parrafo en borrar', async() => {
//         const handleClick = jest.fn();
//         render(<button onClick={handleClick}>Borrar</button>);
//         const button = screen.getByDisplayValue('No se encontro ninguna cita');
//         fireEvent.click(button);
//         expect(button).toBeInTheDocument();
    
//     });
// });

// test('debe devolver un boolean', () => {
//     render(<Cita/>)
//     expect(Cita(number)).toBe('boolean');
// });