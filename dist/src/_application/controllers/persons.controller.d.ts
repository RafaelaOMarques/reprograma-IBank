import { PersonService } from '../../_application/services/persons.service';
import { CreatePersonDto } from '../../_application/dto/create-person.dto';
import { UpdatePersonDto } from '../../_application/dto/update-person.dto';
import { Person } from '../../_domain/entities/person.entity';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    listPersons(): Promise<Person[]>;
    listPersonById(id: string): Promise<Person>;
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    update(id: string, updatePersonDto: UpdatePersonDto): Promise<Person>;
    remove(id: string): Promise<void>;
}
