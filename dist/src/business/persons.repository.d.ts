import { Repository } from "typeorm";
import { Person } from "./entities/person.entity";
export declare class PersonRepository {
    private readonly personRepository;
    constructor(personRepository: Repository<Person>);
    findAll(): Promise<Person[]>;
    findById(id: string): Promise<Person>;
    save(person: Person): Promise<Person>;
    delete(id: string): Promise<boolean>;
}
