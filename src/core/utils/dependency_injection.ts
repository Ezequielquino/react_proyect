import { Container as InversifyContainer } from 'inversify';
import { AuthService } from '../../app/features/dashboard/data/repositories/login';

export const inversifyContainer = new InversifyContainer();
inversifyContainer.bind<AuthService>("AuthService").to(AuthService).inSingletonScope();