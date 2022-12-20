package application.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("adoptions-list")
public class AdoptionEntry {
    @Id
    private String id;
    private String idAnimal;
    private String idUser;
    private String status;
}
