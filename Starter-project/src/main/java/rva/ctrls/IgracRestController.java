package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Igrac;
import rva.jpa.Nacionalnost;
import rva.jpa.Tim;
import rva.repository.IgracRepository;
import rva.repository.NacionalnostRepository;
import rva.repository.TimRepository;

@RestController
public class IgracRestController {

	@Autowired
	private IgracRepository igracRepository;
	
	@Autowired
	private TimRepository timRepository;
	
	@Autowired
	private NacionalnostRepository nacionalnostRepository;
	
	@Autowired private JdbcTemplate jdbcTemplate;
	
	@GetMapping("igrac")
	public Collection<Igrac> getIgrace(){
		return igracRepository.findAll();
	}
	
	@GetMapping("igrac/{id}")
	public Igrac getIgrac(@PathVariable("id") Integer id) {
		return igracRepository.getOne(id);
	}
	
	@GetMapping("igracNacionalnost/{id}")
	public Collection<Igrac> getIgracePoNacionalnostiID(@PathVariable("id")Integer id){
		Nacionalnost n = nacionalnostRepository.getOne(id);
		return igracRepository.findByNacionalnost(n);
		
	}
		
	
}
