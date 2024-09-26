package com.example.demo.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)  // Disable CSRF for simplicity (in production, configure it properly)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/user/register", "/user/login", "/task", "/task/active",
                                "/task/analytics", "/task/search", "/task/{id}", "/task/finished/{id}")
                        .permitAll()  // Allow unauthenticated access to these routes
                        .anyRequest().authenticated()  // Any other request needs authentication
                )
                .formLogin(login -> login    // Configure form login behavior
                        .loginPage("/login")  // Define custom login page
                        .defaultSuccessUrl("/dashboard", true)  // Redirect to dashboard on successful login
                        .permitAll()  // Allow everyone to see the login page
                )
                .logout(logout -> logout    // Configure logout behavior
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/login?logout")
                        .permitAll()
                );

        return http.build();
    }

    // CORS configuration using CorsFilter
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));  // Allow requests from frontend
        corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        corsConfiguration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        corsConfiguration.setAllowCredentials(true);  // Allow credentials (cookies, auth headers)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);  // Apply to all paths
        return new CorsFilter(source);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // Using BCrypt for password hashing
    }
}
