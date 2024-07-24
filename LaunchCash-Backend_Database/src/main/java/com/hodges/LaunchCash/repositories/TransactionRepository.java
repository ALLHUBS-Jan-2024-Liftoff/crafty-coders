package com.hodges.LaunchCash.repositories;

import com.hodges.LaunchCash.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository


public interface TransactionRepository extends JpaRepository <Transaction, Long> {



}
