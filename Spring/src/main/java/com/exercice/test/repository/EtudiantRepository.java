package com.exercice.test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.exercice.test.model.Etudiant;

@Repository
public interface EtudiantRepository extends MongoRepository<Etudiant, Long> {

}