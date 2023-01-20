package application.controller;

import application.domain.WishlistEntry;;
import application.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/wishlist")
public class WishlistController {
    @Autowired
    private WishlistRepository wishlistRepository;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<WishlistEntry>> getAll() {
        return ResponseEntity.ok(wishlistRepository.findAll());
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<WishlistEntry> add(@RequestBody WishlistEntry wishlistEntry){
        System.out.println(wishlistEntry);
        wishlistRepository.save(wishlistEntry);
        return ResponseEntity.ok().body(wishlistEntry);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteWishlistEntry(@PathVariable String id) {
        wishlistRepository.deleteById(id);
        return ResponseEntity.ok().body(id);
    }

    @RequestMapping(value = "/id/{idUser}", method = RequestMethod.GET)
    public ResponseEntity<List<WishlistEntry>> getWishlistByUserId(@PathVariable String idUser) {
        List<WishlistEntry> wishlist = wishlistRepository
                .findAll()
                .stream()
                .filter(wishlistEntry -> wishlistEntry.getIdUser().equals(idUser))
                .toList();
        return ResponseEntity.ok(wishlist);
    }
}