package com.mprodev.ecommerce.repositories;

import com.mprodev.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

/* Mirshod created on 2/19/2021 */
@Repository //it is not mandatory Spring realizes when extending JpaRepository
@CrossOrigin("http://localhost:") // to make our javascript code in
// web browser works. React or Angular
public interface ProductRepository extends JpaRepository<Product, Long> {

}
