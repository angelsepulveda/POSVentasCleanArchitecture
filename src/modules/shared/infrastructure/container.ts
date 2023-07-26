import { Container } from 'inversify';

import { CategoryContainer } from '../../warehouse/categories/infrastructure/container';

//registro de todos los contenedores de dependencias de la App
const container = new Container();

container.load(CategoryContainer);

export { container };
