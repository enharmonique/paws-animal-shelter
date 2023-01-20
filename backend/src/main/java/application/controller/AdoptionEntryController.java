package application.controller;

import application.domain.AdoptionEntry;
import application.repository.AdoptionEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping(value = "/adoptions")
public class AdoptionEntryController {
    @Autowired
    private AdoptionEntryRepository adoptionEntryRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<AdoptionEntry>> getAll() {
        return ResponseEntity.ok(adoptionEntryRepository.findAll());
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<AdoptionEntry> add(@RequestBody AdoptionEntry adoptionEntry){
        adoptionEntry.setStatus("Pending");
        System.out.println(adoptionEntry);
        adoptionEntryRepository.save(adoptionEntry);
        return ResponseEntity.ok().body(adoptionEntry);
    }

    @RequestMapping(value = "/finalize", method = RequestMethod.POST)
    public ResponseEntity<AdoptionEntry> finalize(@RequestBody String id){
        Optional<AdoptionEntry> entry = adoptionEntryRepository.findById(id);
        if(entry.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        if(!Objects.equals(entry.get().getStatus(), "Pending")){
            return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT).build();
        }
        entry.get().setStatus("Finished");
        return ResponseEntity.ok().body(entry.get());
    }

    @RequestMapping(value = "/id/{idUser}", method = RequestMethod.GET)
    public ResponseEntity<List<AdoptionEntry>> getAdoptionsByUserId(@PathVariable String idUser) {
        List<AdoptionEntry> adoptions = adoptionEntryRepository
                .findAll()
                .stream()
                .filter(adoptionEntry -> adoptionEntry.getIdUser().equals(idUser))
                .toList();
        return ResponseEntity.ok(adoptions);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteAdoption(@PathVariable String id) {
        adoptionEntryRepository.deleteById(id);
        return ResponseEntity.ok().body(id);
    }
}
