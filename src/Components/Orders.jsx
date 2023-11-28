/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Order from "./Order"

function Orders({ orders, setOrder, deleteOrder }) {


  console.log(orders)

  return (
    <div className="mb-4 md:w-1/2 lg:w-7/12">
      <div className="border-b-slate-200 border-b-2 pb-2 mb-10">
        <p className="text-xl font-normal text-cyan-900"><span className="text-green-500">Current</span> orders</p>
      </div>

      { orders.length > 0 ? 
        <div className="md:overflow-y-scroll md:h-96 pb-8 px-2">
          {orders.map(order => {
            return (
                <Order
                  key={order.id}
                  order={order} 
                  setOrder = {setOrder}
                  deleteOrder = {deleteOrder}
                />
              )
            })
          }
        </div>
      : 
      <div className="pb-32 md:pb-0 flex justify-center align-middle items-center flex-col mt-20">
        <img className="w-12 opacity-80" src="src/assets/cannabis.png" alt="" />
        <p className="ml-5 text-slate-300 mt-3 text-xl text-center">No orders, time to take a natural medicine!</p>
      </div>
      
      }

      






    </div>
  )
}

export default Orders
