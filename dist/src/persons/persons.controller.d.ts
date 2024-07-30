import { PersonService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { PatchPersonDto } from './dto/patch-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    findAll(): Promise<Person[]>;
    findOne(id: number): Promise<Person>;
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    modify(id: number, patchPersonDto: PatchPersonDto): Promise<Person>;
    update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person>;
    remove(id: number): Promise<void>;
}
