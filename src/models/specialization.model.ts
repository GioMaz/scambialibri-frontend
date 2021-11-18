import ISchool from './school.model';

export default interface ISpecialization {
    id: string;
    name?: string;
    school?: ISchool;
}
