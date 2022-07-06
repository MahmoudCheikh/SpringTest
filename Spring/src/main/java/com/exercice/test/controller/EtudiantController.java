package com.exercice.test.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exercice.test.exception.ResourceNotFoundException;
import com.exercice.test.model.Etudiant;
import com.exercice.test.repository.EtudiantRepository;
import com.exercice.test.service.SequenceGeneratorService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")

public class EtudiantController {
	@Autowired
	private EtudiantRepository etudiantRepository;

	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/etudiants")
	public List<Etudiant> getAllEtudiants() {
		return etudiantRepository.findAll();
	}

	@GetMapping("/etudiants/{id}")
	public ResponseEntity<Etudiant> getEtudiantById(@PathVariable(value = "id") Long etudiantId)
			throws ResourceNotFoundException {
		Etudiant etudiant = etudiantRepository.findById(etudiantId)
				.orElseThrow(() -> new ResourceNotFoundException("Pas d'etudiant avec cet id: " + etudiantId));
		return ResponseEntity.ok().body(etudiant);
	}

	@PostMapping("/etudiants")
	public Etudiant createEtudiant(@Valid @RequestBody Etudiant etudiant) {
		etudiant.setId(sequenceGeneratorService.generateSequence(Etudiant.SEQUENCE_NAME));
		return etudiantRepository.save(etudiant);
	}

	@PutMapping("/etudiants/{id}")
	public ResponseEntity<Etudiant> updateEtudiant(@PathVariable(value = "id") Long etudiantId,
			@Valid @RequestBody Etudiant etudiantDetails) throws ResourceNotFoundException {
		Etudiant etudiant = etudiantRepository.findById(etudiantId)
				.orElseThrow(() -> new ResourceNotFoundException("Pas d'etudiant avec cet id: " + etudiantId));

		etudiant.setNom(etudiantDetails.getNom());
		etudiant.setPrenom(etudiantDetails.getPrenom());
		etudiant.setDateDeNaissance(etudiantDetails.getDateDeNaissance());
		final Etudiant updatedEtudiant = etudiantRepository.save(etudiant);
		return ResponseEntity.ok(updatedEtudiant);
	}

	@DeleteMapping("/etudiants/{id}")
	public Map<String, Boolean> delete(@PathVariable(value = "id") Long etudiantId) throws ResourceNotFoundException {
		Etudiant etudiant = etudiantRepository.findById(etudiantId)
				.orElseThrow(() -> new ResourceNotFoundException("Pas d'etudiant avec cet id: " + etudiantId));

		etudiantRepository.delete(etudiant);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
