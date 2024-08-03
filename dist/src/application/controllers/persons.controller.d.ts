import { PersonService } from '../services/persons.service';
import { CreatePersonDto } from '../../application/dto/create-person.dto';
import { UpdatePersonDto } from '../../application/dto/update-person.dto';
import { Person } from '../../domain/entities/person.entity';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    listPersons(): Promise<Person[]>;
    listPersonById(id: string): Promise<Person>;
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    update(id: string, updatePersonDto: UpdatePersonDto): Promise<Person>;
    remove(id: string): Promise<void>;
}
