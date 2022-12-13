package application.controller;

import application.domain.Event;
import application.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
