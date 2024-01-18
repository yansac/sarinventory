package com.thesis2.sarinventorybackend.controllers;

import com.thesis2.sarinventorybackend.entities.Item;
import com.thesis2.sarinventorybackend.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @Autowired
    private ItemService service;

    public Item addItem (@RequestBody Item item) {
        return service.saveItem(item);
    }
}
