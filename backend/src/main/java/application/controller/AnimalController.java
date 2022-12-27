package application.controller;

import application.domain.Animal;
import application.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/animals")
public class AnimalController {
    @Autowired  private AnimalRepository animalRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<Animal>> getAnimals() {
        return ResponseEntity.ok(animalRepository.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Animal> getAnimalById(@PathVariable String id) {
        Optional<Animal> animal = animalRepository.findById(id);
        return animal.map(value -> ResponseEntity.ok().body(value)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @RequestMapping(value = "/type/{type}", method = RequestMethod.GET)
    public ResponseEntity<List<Animal>> getAnimalsByType(@PathVariable String type) {
        List<Animal> animals = animalRepository
                .findAll()
                .stream()
                .filter(animal -> animal.getType().toString().equals(type))
                .toList();
        System.out.println(animals);
        return ResponseEntity.ok(animals);
    }
}
