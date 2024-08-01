import { PersonService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    listPersons(): Promise<Person[]>;
    listPersonById(id: string): Promise<Person>;
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    update(id: string, updatePersonDto: UpdatePersonDto): Promise<Person>;
    remove(id: string): Promise<void>;
}
