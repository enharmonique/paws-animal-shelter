package application.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Document("events")
public class Event {
    @Id  private String id;
    @Getter @NonNull  private String title;
    @Getter @Setter private String description;
    @Getter @Setter @NonNull private String location;
    @Getter @Setter private String dateTime;
    @Getter @Setter @NonNull private String category;
}