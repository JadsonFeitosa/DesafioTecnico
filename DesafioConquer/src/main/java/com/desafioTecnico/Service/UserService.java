package com.desafioTecnico.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.desafioTecnico.Model.User;
import com.desafioTecnico.Repository.UserRepository;

import reactor.core.publisher.Mono;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private WebClient webClient;

	public User save(User user) {
		return repository.save(user);
	}

	public User update(Long codigo, User user) {
		User userSalvo = repository.getById(codigo);
//		BeanUtils.copyProperties(user, userSalvo,"id");
//		repository.save(userSalvo);
//		return userSalvo;	
//		userSalvo.setId(user.getId());
		userSalvo.setName(user.getName());
		userSalvo.setCell(user.getCell());
		userSalvo.setEmail(user.getEmail());
		userSalvo.setDate(user.getDate());
		userSalvo.setPassword(user.getPassword());
		userSalvo.setUsername(user.getUsername());
		userSalvo.setPicture(user.getPicture());

		return repository.save(userSalvo);
	}

	public void delete(long id) {
		repository.getById(id);
		repository.deleteById(id);
	}

	public List<User> listUser() {
		return repository.findAll();
	}

	public List<User> filterName(String name) {
		return repository.findUserByNameContains(name);
	}

	public List<User> filterEmail(String email) {
		return repository.findUserByEmailContains(email);
	}

	public List<User> filterCell(String cell) {
		return repository.findUserByCellContains(cell);
	}

	public List<User> listUsers() {

		List<User> list = new ArrayList<>();

		for (int i = 0; i <= 5; i++) {
			User user = findUser();
			list.add(user);
			System.out.println(user);
		}
		return list;
	}

	public User findUser() {

		Mono<User> monoUser = this.webClient.method(HttpMethod.GET).uri("/api").retrieve().bodyToMono(User.class);

		User user = monoUser.block();
		return user;
	}

}
