package com.desafioTecnico.Controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.desafioTecnico.Model.User;
import com.desafioTecnico.Service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

//	metodo de salvar
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<User> save(@Valid @RequestBody User User, HttpServletResponse response) {
		User userSalvo = userService.save(User);
		return ResponseEntity.status(HttpStatus.CREATED).body(userSalvo);
	}

//	metodo de atualizar entidade
	@PutMapping("/{codigo}")
	public ResponseEntity<User> update(@PathVariable Long codigo, @RequestBody User User) {
		User UserSalvo = userService.update(codigo, User);
		return ResponseEntity.ok(UserSalvo);
	}

//	metodo de deletar
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long codigo) {
		userService.delete(codigo);
	}

	@GetMapping
	public List<User> getList() {
		return userService.listUser();
	}

	@GetMapping("/filterName/{name}")
	public List<User> filterName(@PathVariable String name) {
		return userService.filterName(name);
	}

	@GetMapping("/filterEmail/{email}")
	public List<User> filterEmail(@PathVariable String email) {
		return userService.filterEmail(email);
	}

	@GetMapping("/filterCell/{cell}")
	public List<User> filterCell(@PathVariable String cell) {
		return userService.filterCell(cell);
	}

//	@GetMapping("/get")
//	public ResponseEntity<User> getUser(){
//
//		return ResponseEntity.ok(userService.findUser());
//	}
}
