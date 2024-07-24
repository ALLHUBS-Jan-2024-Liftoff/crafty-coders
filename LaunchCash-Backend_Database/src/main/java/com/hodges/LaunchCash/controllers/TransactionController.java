package com.hodges.LaunchCash.controllers;


import com.hodges.LaunchCash.models.Transaction;
import com.hodges.LaunchCash.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping( )
//need to add request mapping path
public class TransactionController {
    @Autowired
    private TransactionRepository transactionRepository;

    @PostMapping
    public Transaction createTransaction(@RequestBody Transaction transaction) {
//       need to add something to track transactions so could sort
        return transactionRepository.save(transaction);
    }

    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }


}