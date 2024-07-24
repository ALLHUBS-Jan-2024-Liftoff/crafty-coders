package com.CraftyCoders.LaunchCash.repositories;

import com.CraftyCoders.LaunchCash.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository


public interface TransactionRepository extends JpaRepository <Transaction, Long> {



}
