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
    @Getter @NonNull  private String name;
    @Getter @Setter private String location;
    @Getter @Setter private String date;
    @Getter @Setter private String description;
    @Getter @Setter private String imagePath;
    @Getter @Setter private String noParticipants;
    @Getter @Setter private String[] participantsId;
}