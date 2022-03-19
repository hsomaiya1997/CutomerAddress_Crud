# CutomerAddress_Crud
CRUD For Customer using spring-boot +jpa  and angular

Frontend

    This Folder Contains the angular app which is run on port 4200
    
    To Run, Frontend Application Go to the Frontend root folder 
    **Prerequisite**
        Install the latest version of Angular CLI
        Run npm install 
        Run npm start (it will start the project on Port 4200)
        
        you can find screenshot for UI from this link
        
        https://drive.google.com/drive/folders/1Vr7-iocya7vNCUhw6r9m2V51lKjzNgli?usp=sharing
        
    Backend
        You can import the backend project as an existing maven project in IDE
        It contains spring-boot application with JPA Repository
        In Src folder
            Controller
            Model
            Repository
            Application file

    Database
       SQL configuration is defined in the application.properties file in Backend folder
       you have to create "spring-boot-hibernate"  in local through ("create schema `spring-boot-hibernate`")
       After that when you run the spring boot application it will automatically create 2 table customer and customer_address
