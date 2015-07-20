package pojo;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Jkaur3589
 */

import java.io.FileWriter;
import java.io.IOException;
 
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class pizza {
  private String forename;
  private String surname;
  private String address;
  private String city;
  private String province;
  private String postalcode;
  private String telephonenumber;
  private String email;
  private String numberofpizzas;
  private String size;
   private String crusttype;
  private String[] toppings;

    public pizza() {
    }

    public pizza(String forename, String surname, String address, String city, String province, String postalcode, String telephonenumber, String email, String numberofpizzas, String size, String crusttype, String[] toppings) {
        this.forename = forename;
        this.surname = surname;
        this.address = address;
        this.city = city;
        this.province = province;
        this.postalcode = postalcode;
        this.telephonenumber = telephonenumber;
        this.email = email;
        this.numberofpizzas = numberofpizzas;
        this.size = size;
        this.crusttype = crusttype;
        this.toppings = toppings;
    }

    public String getForename() {
        return forename;
    }

    public void setForename(String forename) {
        this.forename = forename;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalcode() {
        return postalcode;
    }

    public void setPostalcode(String postalcode) {
        this.postalcode = postalcode;
    }

    public String getTelephonenumber() {
        return telephonenumber;
    }

    public void setTelephonenumber(String telephonenumber) {
        this.telephonenumber = telephonenumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumberofpizzas() {
        return numberofpizzas;
    }

    public void setNumberofpizzas(String numberofpizzas) {
        this.numberofpizzas = numberofpizzas;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getCrusttype() {
        return crusttype;
    }

    public void setCrusttype(String crusttype) {
        this.crusttype = crusttype;
    }

    public String[] getToppings() {
        return toppings;
    }

    public void setToppings(String[] toppings) {
        this.toppings = toppings;
    }
  
     
 public double totalcost()
 {
  
  double totalcost=0;
  double tax;
  double sizecost;
  
  int numberofpizza = Integer.parseInt(numberofpizzas);
  
  
  if(province.equals("Ontario"))
    {

    tax = 0.13;

    }
    else if (province.equals("Manitoba")) 
    {
    tax = 0.13;
    }
    
    else if (province.equals("Quebec"))
    {
    
    tax = 0.1495;
    }
    
    else if (province.equals("Saskatchewan"))
    {
    tax = .05;
    }
    
    else
    {
        
    tax = 0.13;
    
    }
  
  
     if (size.equals("small"))
     {
        sizecost = 5;
     }
     else if (size.equals("medium"))
     { 
         sizecost =  10;
     }
     
     else if (size.equals("large"))
     {
         sizecost =  15;
     }
 
     else if (size.equals("Extralarge"))
     {
        sizecost =  20;
             
        }
     else
     {
        sizecost =  20;
     }
     
     if("Stuffed Crust".equals(crusttype))
     {
       
    totalcost= totalcost+2;
     }
     
    if(toppings.length>1)
    {
        int length= toppings.length;
        length=length-1;
        
        totalcost = totalcost + length*.5;
    }
    
    
    if(numberofpizza>1)
    {
        totalcost = totalcost*numberofpizza;
    }
        
      totalcost = (totalcost + sizecost);
      totalcost =  totalcost + totalcost*tax;
      
      return totalcost;
  
 }
 
 public void writeDataToFile(String forename, String surname,String address , String city, String postalcode ,  String telephonenumber, String email, String numberofpizzas) throws IOException
 {
        JSONObject obj = new JSONObject();
        obj.put("Forename", forename);
        obj.put("Surname", surname);
        obj.put("Address", address);
        obj.put("City", city);
        obj.put("PostalCode", postalcode);
        obj.put("Telephone number", postalcode);
        obj.put("Email", postalcode);
        obj.put("Number of pizzas", postalcode);
                         
        FileWriter file = new FileWriter("/Users/Public/Desktop/Order.txt");
        try {
            file.write(obj.toJSONString());
            System.out.println("Successfully Copied JSON Object to File...");
            System.out.println("\nJSON Object: " + obj);

        }catch (IOException e) {
            e.printStackTrace();

        } finally {
            file.flush();
            file.close();
        }
 }
         
 
}
