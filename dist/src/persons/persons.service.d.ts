import { Person } from './entities/person.entity';
import { PersonRepository } from './persons.repository';
export declare class PersonService {
    private readonly personRepository;
    private persons;
    constructor(personRepository: PersonRepository);
    listPersons(): Promise<Person[]>;
    listPersonById(id: string): Promise<Person>;
    newPerson(name: string, cpf: string, telephone: string, salary: number, zipCode?: string, complement?: string): Promise<Person>;
    updatePerson(id: string, name: string, cpf: string, telephone: string, salary: number, zipCode: string): Promise<Person | null>;
    remove(id: string): Promise<void>;
}
