package manageFriends.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class manageFriendsDto {
    private Long id;
    private String firstName ;
    private String lastName ;
    private String phoneNumber ;
    private String emailId ;
}

