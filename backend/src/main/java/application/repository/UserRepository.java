package application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import application.domain.User;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
}
