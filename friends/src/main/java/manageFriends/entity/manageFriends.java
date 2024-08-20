package manageFriends.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="friends")
public class manageFriends {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="first_name")
    private String firstName ;
    @Column(name="last_name")
    private String lastName ;
    @Column(name="phone_number")
    private String phoneNumber ;
    @Column(name="email_id", nullable = false,unique = true)
    private String emailId ;
}
