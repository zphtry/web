package somepackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.querydsl.core.types.Predicate;



@Controller
@RequestMapping(path="/demo")
public class CustomerController {

  private final CustomerRepository customerRepository;

  @Autowired
  public CustomerController(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
  }

  @GetMapping(path="/")
  public @ResponseBody Page<Customer>
  addNewUser(
    Model model,
//    @QuerydslPredicate Predicate predicate,
    Pageable pageable
  ) {
    return customerRepository.;
  }
}
