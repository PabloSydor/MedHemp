function Order({order, setOrder, deleteOrder}) {

    const my_order = order;

    function handleDelete() {
        const respuesta = confirm("Are you sure about deleting this order?")

        if (respuesta) {
            deleteOrder(order.id)
        }
    }

  return (
    <div className="flex p-6 shadow-md rounded-lg text-cyan-900 mb-6">
        <div className="w-9/12">
            <p className="text-lg font-semibold">{my_order.name}</p>
            <p className="text-lg">{my_order.card}</p>
            <div className="flex">
                <p className="text-lg">{my_order.medicine}</p>
                <p className="text-lg ml-2">{my_order.cant}</p>
            </div>
            <p className="text-gray-300 italic mt-2">{my_order.notes}</p>
        </div>
        <div className="w-3/12 flex flex-col items-end space-y-3">
            <p className="text-gray-300">{my_order.date}</p>
            <p className="text-2xl font-bold">{my_order.price}</p>
            <div className="flex">
                <div onClick={() => setOrder(order)} className="bg-ed-btn w-10 h-10 flex justify-center align-middle items-center rounded-md cursor-pointer hover:bg-gradient-to-b from-lime-300 to-green-500">
                    <img src="src/assets/pen.svg" alt="" />
                </div>
                <div onClick={handleDelete} className="bg-del-btn w-10 h-10 flex justify-center align-middle items-center rounded-md cursor-pointer ml-3 hover:bg-gradient-to-b from-pink-500 to-pink-700">
                    <img src="src/assets/bin.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order
