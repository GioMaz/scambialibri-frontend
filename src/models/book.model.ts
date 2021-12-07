import IOffer from './offer.model';

export default interface IBook {
  id: number;
  isbn: string;
  title: string;
  subtitle: string;
  price: number;
  author: string;

  offer?: IOffer;
}

export enum BookStatus {
  new = 'Nuovo',
  pencilNotes = 'Note a matita',
  penNotes = 'Note a penna',
  badConditions = 'Cattive condizioni'
}
