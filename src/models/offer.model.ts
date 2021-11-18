import BookStatus from './book.model';
import IBook from './book.model';

export enum OfferType {
    buy,
    sell
}

export default interface IOffer {
    id?: string;
    book?: IBook;
    isPending?: boolean;
    bookStatus?: BookStatus;
    additionalMaterial?: boolean;
}
