<%-- 
    Document   : ProcessOrder
    Created on : Jun 10, 2015, 6:29:30 PM
    Author     : Jkaur3589
--%>

<%
    
    String _forename = request.getParameter("forename");
    String _surname = request.getParameter("surname");
    String _address = request.getParameter("address");
    String _city = request.getParameter("city");
    String _province = request.getParameter("province");
    String _postalcode = request.getParameter("postalcode");
    String _telephonenumber = request.getParameter("telephonenumber");
    String _email = request.getParameter("email");
    String _numberofpizzas = request.getParameter("numberofpizzas");
    String _size= request.getParameter("radiosize");
    String _crusttype = request.getParameter("crusttype");
    String[] _toppings = request.getParameterValues("toppings");
      
    
    
    
    pojo.pizza order = new pojo.pizza();
    order.setForename(_forename);
    order.setSurname(_surname);
    order.setAddress(_address);
    order.setCity(_city);
    order.setProvince(_province);
    order.setPostalcode(_postalcode);
    order.setTelephonenumber(_telephonenumber);
    order.setEmail(_email);
    order.setNumberofpizzas(_numberofpizzas);
    order.setSize(_size);
    order.setCrusttype(_crusttype);
    order.setToppings(_toppings);
    
    double cost = order.totalcost();

    order.writeDataToFile(_forename, _surname, _address, _city, _postalcode, _telephonenumber, _email, _numberofpizzas);



%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
               <link rel="stylesheet" href="style.css"  type="text/css" />
        <title>JSP Page</title>
    </head>
    <body>
        <h1> You have successfully place an order and your information is as below: </h1>
        <br>
        <br>
        <h2>Forename: <%=order.getForename() %></h2>
        <h2>Surname:<%=order.getSurname() %></h2>
        <h2>Address:<%=order.getAddress() %></h2>
        <h2>City:<%=order.getCity()%></h2>
        <h2>Province:<%=order.getProvince()%></h2>
        <h2>Postal Code:<%=order.getPostalcode()%></h2>
        <h2>Telephone Number:<%=order.getTelephonenumber()%></h2>
        <h2>Email:<%=order.getEmail()%></h2>
        <h2>You have ordered <%=order.getNumberofpizzas()%> pizza</h2>
        <h2>Your size of pizza is <%=order.getSize()%></h2>
        <h2>You have choose <%=order.getCrusttype()%> crust type</h2>
        <h2>Your total cost is <%=cost%></h2>
        
        <h2> You have choose these toppings :
            <%for(String t:_toppings)
            {
            out.println(t);
            }
            
            %>
        </h2>
       
         <img  src="img2.jpg" width="323"  height="267"  border='solid' border-color='red' />
        

        
    </body>
</html>
