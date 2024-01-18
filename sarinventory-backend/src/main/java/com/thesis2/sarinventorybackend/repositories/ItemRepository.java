package com.thesis2.sarinventorybackend.repositories;

import com.thesis2.sarinventorybackend.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {

    Item findByName(String name);
}
