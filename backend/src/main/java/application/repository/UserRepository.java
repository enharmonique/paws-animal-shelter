package application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import application.domain.User;

public interface UserRepository extends MongoRepository<User, String> {
}
