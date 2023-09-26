# Google-DSE Backend Task

## Client API:
This is the main page of our Inventory Management application. Users are greeted with an overview of the available features and operations.


![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/11c351c5-0dd9-4df7-84cd-9b929ff05dc1)

**Adding Items:**
 
![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/b08152e7-2a7f-49ba-8ca6-8576c57fd23c)

This screenshot displays the form for adding a new item to our inventory. Users can input the item's name, stock quantity, and price. Clicking the "Add Item" button submits the item to the inventory.

**Delete Item Operation**

 ![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/0d38255a-3da1-4466-a895-f176393d70a2)

Users can delete items from the inventory by specifying the item's ID in this form. Clicking the "Delete Item" button removes the selected item from the inventory.


**Creating Invoice**

 ![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/faba5566-bc8e-47ed-b3c2-b681a664697e)

This function creates an invoice by fetching item details based on user-input item IDs, calculating the subtotal, taxes, and discounts, and then sending a POST request to create the invoice on the server. It handles errors and displays success messages as needed.


**Deleting Invoice**

![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/1e5c9dd7-788e-4e5e-af0e-41c7e339b64f)

 
**Manage operation**

![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/25a4aad8-97e3-44ee-a89f-a35c5a5e42d1)

This screenshot showcases the form for performing manage operations on items. Users input the invoice ID and specify the items and quantities that need to be updated in the inventory. This feature helps maintain accurate stock levels.

 
## Request Handling on the backend

### /items class

**POST**

![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/6f6e978f-48c4-4f7a-86c6-d553c0a3478d)

 
 
**GET**

![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/bd2bcf24-1d6b-4e31-80b1-afa7388cc0d1)

**PUT**

 ![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/617093c1-9c60-4d12-8a22-07af23bb1c7f)

**DELETE**

 ![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/40864c1d-90a3-43a5-9872-fb056ac8a3b7)
 
 ![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/43901372-edda-4d48-a172-406a44adc922)

 

### /invoice class

**GET**

![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/0640880c-23e0-44ee-814b-6bf22a04a776)

POST,PUT,DELETE are handled similarly to item class
 

**/manage**

 ![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/63e06a8c-39a2-4479-9141-5d188e1bb3e1)

 ![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/e08df2c2-a249-4993-95a9-3303fd909a2a)

 ![image](https://github.com/pratyush103/Google-DSE-Task/assets/82302954/b935cd07-e104-44a2-b488-799c5cfffa19)



 
 
