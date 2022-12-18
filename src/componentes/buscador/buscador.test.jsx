import { fireEvent, render, waitFor } from '@testing-library/react'
import Buscador from './Buscador';

const onBuscar = jest.fn();
const renderBuscador = () => {
    const component = render(<Buscador onBuscar={onBuscar} />);
    return component;
};

describe('<Buscador />', () => {
    test('Se debe renderizar el componente', async () => {
        const component = renderBuscador();
        expect(component.container).toBeInTheDocument();
    });
});