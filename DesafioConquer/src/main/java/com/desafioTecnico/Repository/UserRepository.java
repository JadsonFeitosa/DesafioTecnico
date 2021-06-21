package com.desafioTecnico.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desafioTecnico.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	public List<User> findUserByNameContains(String name);

	public List<User> findUserByEmailContains(String email);

	public List<User> findUserByCellContains(String cell);

	public boolean existsByEmail(String email);

	public List<User> findTop5ByNameContains(String name);
}
