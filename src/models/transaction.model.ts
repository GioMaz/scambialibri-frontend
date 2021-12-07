import { BookStatus, IBook } from './book.model';
import IUser from './user.model';

export default interface ITransaction {
  id?: string;
  book?: IBook;
  user?: IUser;
  bookStatus: BookStatus;
  additionalMaterial?: boolean;
  status?: TransactionStatus;
}

export enum TransactionStatus {
  free = 'Libera',
  pending = 'In trattativa',
  closed = 'Chiusa',
  notResponding = 'Non risponde',
  inCompletion = 'In completamento',
  completed = 'Completata'
}
