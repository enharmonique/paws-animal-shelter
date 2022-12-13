package application.repository;

import application.domain.Event;


import org.springframework.data.mongodb.repository.MongoRepository;
import application.domain.User;

public interface EventRepository extends MongoRepository<Event, String> {
}
