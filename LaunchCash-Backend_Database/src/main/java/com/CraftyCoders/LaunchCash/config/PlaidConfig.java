//package com.CraftyCoders.LaunchCash.config;
//
//import com.CraftyCoders.LaunchCash.models.PlaidClient;
//import com.fasterxml.jackson.annotation.JsonProperty;
//import jakarta.validation.constraints.NotEmpty;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class PlaidConfig {
//
//  @Value("plaid.clientId")
//  private String clientId;
//
//  @Value("plaid.secret")
//  private String secret;
//
//  @Value("plaid.env")
//  private String env;
//
//  @Bean
//  public PlaidClient plaidClient() {
//    return PlaidClient.newBuilder()
//            .clientIdAndSecret(clientId, secret)
//            .sandboxBaseUrl()
//            .build();
//  }
//
//
//}