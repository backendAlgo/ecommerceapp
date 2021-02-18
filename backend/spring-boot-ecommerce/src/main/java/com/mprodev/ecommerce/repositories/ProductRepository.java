package com.mprodev.ecommerce.repositories;

import com.mprodev.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/* Mirshod created on 2/19/2021 */
@Repository //it is not mandatory Spring realizes when extending JpaRepository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
