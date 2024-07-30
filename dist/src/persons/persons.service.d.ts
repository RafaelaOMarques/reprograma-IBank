import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { PatchPersonDto } from './dto/patch-person.dto';
export declare class PersonService {
    private readonly personRepository;
    constructor(personRepository: Repository<Person>);
    findAll(): Promise<Person[]>;
    findOne(id: number): Promise<Person>;
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    patch(id: number, patchPersonDto: PatchPersonDto): Promise<Person>;
    update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person>;
    remove(id: number): Promise<void>;
}
