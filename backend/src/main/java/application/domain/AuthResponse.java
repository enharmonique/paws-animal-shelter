package application.domain;

import lombok.*;

@RequiredArgsConstructor
@AllArgsConstructor
public class AuthResponse<T> {
    @NonNull
    public T entity;
    public boolean errorFlag = false;
    public String reasoning = "";
}
