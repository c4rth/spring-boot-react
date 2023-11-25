package org.carth.springreact.service;

import com.github.javafaker.Faker;
import org.carth.springreact.model.Person;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonService {
    Faker faker = new Faker();

    public List<Person> getPersons(int page, int pageSize) {
        var list = new ArrayList<Person>();
        for (int i = 0; i < pageSize; i++) {
            list.add(createPerson(page, pageSize, i));
        }
        return list;
    }

    private Person createPerson(int page, int pageSize, int idx) {
        return createPerson(page * pageSize + idx + 1);
    }


    public Person createPerson(int idx) {
        var p = new Person();
        p.setId(idx);
        p.setFirstName(faker.name().firstName());
        p.setLastName(faker.name().lastName());
        p.setAge(faker.number().numberBetween(1, 60));
        p.setVisits(faker.number().numberBetween(1, 1000));
        p.setProgress(faker.number().randomDigit());
        p.setStatus(faker.lorem().characters(10, 50));
        p.setAddress(faker.address().fullAddress());
        p.setEmail(faker.internet().emailAddress());
        p.setAdmin(faker.bool().bool());
        return p;
    }
}
