import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import QueryContext from '../context/QueryContext';

type RenderWithProviderProps = {
  children: React.ReactNode;
};

function renderWithContext({ children }: RenderWithProviderProps) {
  return <QueryContext.Provider value="">{children}</QueryContext.Provider>;
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: renderWithContext, ...options });
}

export { customRender as render };
