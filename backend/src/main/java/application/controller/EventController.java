package application.controller;

import application.domain.AdoptionEntry;
import application.domain.Animal;
import application.domain.Event;
import application.domain.User;
import application.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/events")
public class EventController {
    @Autowired  private EventRepository eventRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<Event>> getEvents() {
        return ResponseEntity.ok(eventRepository.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Event> getEventById(@PathVariable String id) {
        Optional<Event> event = eventRepository.findById(id);
        return event.map(value -> ResponseEntity.ok().body(value)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping(value="/update/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable String id, @RequestBody Event updateEvent){
        if (id.equals(updateEvent.getId())) {
            try {
                Event updateReturnEvent = this.eventRepository.save(updateEvent);
                return new ResponseEntity<>(updateReturnEvent, HttpStatus.OK);
            }catch(IllegalArgumentException exception) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
