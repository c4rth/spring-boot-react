package org.carth.springreact.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.carth.springreact.model.Person;
import org.carth.springreact.service.PersonService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class PersonController {

    private final PersonService personService;

    @GetMapping("/person")
    public List<Person> getPerson(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "25") int pageSize) {
        return personService.getPersons(page, pageSize);
    }

    @PostMapping(path ="/person", consumes = {"application/json"})
    public Person updateUser(@RequestBody Person person) {
      log.info("update user: {}", person);
      return person;
    }

}