import Header from "./Components/Header";
import Form from "./Components/Form";
import Orders from "./Components/Orders";
import { useState, useEffect } from "react";

function App() {

  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});

  useEffect( () => {
    const obtenerLS = () => {
      const ordersLS = JSON.parse(localStorage.getItem('orders')) ?? [];
      setOrders(ordersLS);
    }

    obtenerLS();
  }, [])

  useEffect( () => {
    localStorage.setItem('orders', JSON.stringify( orders ));
  }, [orders])



  function deleteOrder(id) {
    const actualOrders = orders.filter( order => order.id !== id)
    setOrders(actualOrders)
  }

  return (
      <div className="transition sm:px-6 md:px-20 lg:px-24">
        {/* <p className="text">{abeja.toUpperCase()}</p>
        <p>{edad >= 18 ? "si puede" : "No puede" }</p>
        <p>{suma()}</p> */}
        <div className="flex justify-center relative">
          <Header />
        </div>
        <div className="md:flex">
          <Form 
            orders = {orders}
            setOrders = {setOrders}
            order = {order}
            setOrder = {setOrder}
          />
          <Orders 
            orders = {orders}
            setOrder = {setOrder}
            deleteOrder = {deleteOrder}
          />
        </div>
        
      </div>
  )
}

export default App
