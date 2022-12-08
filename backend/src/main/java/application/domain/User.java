package application.domain;

import com.mongodb.lang.NonNull;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Document("users")
public class User {
    @Id  private String id;
    @Getter @NonNull  private String username;
    @Getter @Setter @NonNull  private String password;
    @Getter @Setter private String address;
    @Getter @Setter private int age;
    @Getter @Setter private String description;
    @Getter @Setter private String profilePicturePath;
}
