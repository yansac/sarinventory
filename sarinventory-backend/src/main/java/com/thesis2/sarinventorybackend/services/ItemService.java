package com.thesis2.sarinventorybackend.services;

import com.thesis2.sarinventorybackend.entities.Item;
import com.thesis2.sarinventorybackend.repositories.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private ItemRepository itemRepo;

    public Item saveItem(Item item){
        return itemRepo.save(item);
    }

    public List<Item> saveItems(List<Item> items){
        return itemRepo.saveAll(items);
    }

    public List<Item> getItems (){
        return itemRepo.findAll();
    }

    public Item getItemById(int id) {
        return itemRepo.findById(id).orElse(null);
    }

    public Item getItemByName (String name){
        return itemRepo.findByName(name);
    }

    public String deleteProduct (int id){
        itemRepo.deleteById(id);
        return  "product removed" + id;
    }

    public Item updateItem (Item item) {
        Item existingItem = itemRepo.findById(item.getId()).orElse(null);
        existingItem.setItemName(item.getItemName());
        existingItem.setStock(item.getStock());

        return itemRepo.save(existingItem);
    }
}
