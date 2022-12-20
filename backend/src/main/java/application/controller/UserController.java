package application.controller;

import application.domain.User;
import application.domain.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import application.repository.UserRepository;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/users")
public class UserController {
    @Autowired  private UserRepository userRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(value -> ResponseEntity.ok().body(value)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<AuthResponse<User>> addUser(@RequestBody User user){
        if (userRepository.findByUsername(user.getUsername()).isPresent()){
            return ResponseEntity.ok().body(new AuthResponse<>(user, true, "Account with the given username already exists"));
        }
        userRepository.save(user);
        return ResponseEntity.ok().body(new AuthResponse<>(user));
    }

    @PutMapping(value="/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User updateUser){
        if (id.equals(updateUser.getId())) {
            try {
                User updateReturnUser = this.userRepository.save(updateUser);
                return new ResponseEntity<>(updateReturnUser, HttpStatus.OK);
            }catch(IllegalArgumentException exception) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/check", method = RequestMethod.POST)
    public ResponseEntity<AuthResponse<User>> checkUser(@RequestBody User user){
        Optional<User> localUser = userRepository.findByUsername(user.getUsername());
        if(localUser.isPresent() && localUser.get().getPassword().matches(user.getPassword())){
            return ResponseEntity.ok().body(new AuthResponse<>(localUser.get()));
        }
        return ResponseEntity.ok().body(new AuthResponse<>(user, true, "Account doesn't exist"));
    }
}
