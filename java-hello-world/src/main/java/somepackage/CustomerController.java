package somepackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import somepackage.Flower;
import somepackage.FlowerRepository;

import javax.annotation.PostConstruct;

@Controller
@RequestMapping(path="/demo")
public class CustomerController {


  @Autowired
  private CustomerRepository customerRepository;

  @GetMapping(path="/")
  public @ResponseBody Iterable<Customer>
  addNewUser() {
    return customerRepository.findAll();
  }

}

//
//@Controller
//@RequestMapping(path="/demo")
//public class FlowerController {
//
//    // private Arduino arduino;
//
//
//    @PostConstruct
//    void afterInit() {
//        System.out.println("Инициализация");
//        // arduino = new Arduino("ttyUSB1", 9600);
//        // arduino.openConnection();
//    }
//
//    @Autowired
//    private FlowerRepository flowerRepository;
//
//    @GetMapping(path="/add") // Map ONLY GET Requests
//    public @ResponseBody String addNewUser (
//            @RequestParam String name,
//            @RequestParam Integer count) {
//
//        Flower flower = new Flower();
//        flower.name = name;
//        flower.count = count;
//        System.out.println(flower);
//        flowerRepository.save(flower);
//
//        return "Saved";
//    }
//
//
//    @GetMapping(path="/all")
//    public @ResponseBody Iterable<Flower> getAllFlowers() {
//        // arduino.serialWrite("config.disable");
////    System.out.println();
//        // return "sd";
//        return flowerRepository.findAll();
//    }
//
//}