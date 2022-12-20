package application.repository;

import application.domain.AdoptionEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdoptionEntryRepository extends MongoRepository<AdoptionEntry, String> {
}
