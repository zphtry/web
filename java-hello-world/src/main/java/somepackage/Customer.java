package somepackage;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Date;

@Entity
@Table(name="customers")
public class Customer {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "customer_id")
    public Integer id;

    @Column(name = "first_name")
    public String firstName;

    @Column(name = "second_name")
    public String secondName;

    @Column(name = "age")
    public Integer age;

    @Column(name = "created_at")
//    @Temporal(TemporalType.TIMESTAMP)
    public ZonedDateTime createdAt;

}