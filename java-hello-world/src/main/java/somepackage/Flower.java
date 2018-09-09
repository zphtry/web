package somepackage;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Flower {

  @Id @GeneratedValue(strategy=GenerationType.AUTO)
  public Integer id;

  public String name;

  public Integer count;

  // public Integer getId() {
  //   return id;
  // }

  // public void setId(Integer id) {
  //   this.id = id;
  // }

  // public String getName() {
  //   return name;
  // }

  // public void setName(String name) {
  //   this.name = name;
  // }

  // public Integer getCount() {
  //   return count;
  // }

  // public void setCount(Integer count) {
  //   this.count = count;
  // }
}