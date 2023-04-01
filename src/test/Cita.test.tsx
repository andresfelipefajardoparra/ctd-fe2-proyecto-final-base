import Cita from "../features/quote/Cita";
import { fireEvent, render, screen } from "../test-utils";
import { server } from '../mocks/server'



describe('Pruebas en <Citas />', () => {
    test('Busquyeda de cita por personaje', async () => {
        render(<Cita />)

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');

        fireEvent.change(input, { target: { value: 'Lisa' } })

        const button = screen.getByRole('button', { name: 'Obtener Cita' });

        fireEvent.click(button);

        expect(await screen.findByText("These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.")).toBeInTheDocument()

    })

})

describe('Pruebas en <Citas /> random', () => {
    test('Busquyeda de cita por personaje', async () => {
        render(<Cita />)

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');

        fireEvent.change(input, { target: { value: 'Milhouse' } })

        const button = screen.getByRole('button', { name: 'Obtener Cita' });

        fireEvent.click(button);

        expect(await screen.findByText("These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.")).toBeInTheDocument()

    })

})