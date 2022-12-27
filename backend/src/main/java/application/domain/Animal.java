package application.domain;

import com.mongodb.lang.NonNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("animals")
public class Animal {
    @Id
    private String id;

    @NonNull  private String name;
    private Type type;
    private String breed;
    private String age;
    private String dateAdded;
    private String description;
    private String imagePath;
}
