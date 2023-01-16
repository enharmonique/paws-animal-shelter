package application.repository;

import application.domain.WishlistEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WishlistRepository extends MongoRepository<WishlistEntry, String> {
}