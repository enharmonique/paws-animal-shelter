package application.controller;

import application.domain.Animal;
import application.domain.AuthResponse;
import application.domain.User;
import application.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return ResponseEntity.ok(animals);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<Animal> addAnimal(@RequestBody Animal animal){
        animalRepository.save(animal);
        return ResponseEntity.ok().body(animal);
    }
}
