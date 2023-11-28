import {useState, useEffect} from 'react'
import Error from './Error';


// rfce
function Form({orders, setOrders, order, setOrder}) {

  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [medicine, setMedicine] = useState('');
  const [cant, setCant] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(order).length > 0) {
      setName(order.name)
      setCard(order.card)
      setMedicine(order.medicine)
      setCant(Number(order.cant.substring(1, order.cant.length - 5)))
      setPrice(parseFloat(order.price.substring(0, order.price.length - 2)) / Number(order.cant.substring(1, order.cant.length - 5)))
      setDate(order.date)
      setNotes(order.notes)
    }
  }, [order])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return random + date
  }


  const handleSubmit = (e) => {
    
    e.preventDefault();

    // VALIDAMOS EL FORMULARIO

    if( [name, card, medicine, cant, price, date, notes].includes('') ) {
      setError(true);
      return;
    } 

    setError(false);

    const newOrder = {
      name,
      card,
      medicine,
      "cant": "("+cant+" uds)", 
      "price": "" + (price * cant).toFixed(2) + " $",
      date,
      notes
    }



    if (order.id) {
      newOrder.id = order.id
      const ordersActuals = orders.map( orderState => orderState.id === order.id ? newOrder : orderState);
      setOrders(ordersActuals)
      setOrder({})
    } else {
      newOrder.id = generarId();
      setOrders([...orders, newOrder]);
    }


    setName('')
    setCard('')
    setMedicine('')
    setCant(0)
    setPrice(0.0)
    setDate('')
    setNotes('')


  }

  return (

    <div className="md:w-1/2 lg:w-5/12 mb-4 mr-0 md:mr-8">

      <div className="border-b-slate-200 border-b-2 pb-2">
        <p className="text-xl font-normal text-cyan-900"><span className="text-green-500">New</span> order</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-md p-6 mt-6 bg-pale-green" action="">

        {error && <Error><span>All fields are required!</span></Error>}


        

        <div className="mb-3 flex">
          <div className="w-8/12">
            <label htmlFor="name" className="block text-cyan-900 mb-1">Name</label>
            <input value={name} onChange={ (e) => setName(e.target.value) } id="name" className="focus:bg-lime-50 rounded-sm py-1 px-2 text-green-500 outline-none bg-white w-full placeholder-gray-400" type="text" placeholder="Name and surnames" />
          </div>
          <div className="w-4/12 ml-3">
            <label htmlFor="cid" className="block text-cyan-900 mb-1">Card ID</label>
            <input value={card} onChange={ (e) => setCard(e.target.value) }  id="cid" className="focus:bg-lime-50 rounded-sm py-1 px-2 text-green-500 outline-none bg-white w-full placeholder-gray-400" type="text" placeholder="12334567-Z" />
          </div>
        </div>
        
        <div className="mb-3 flex">
          <div className="w-8/12">
            <label htmlFor="med" className="block text-cyan-900 mb-1">Medicine</label>
            <input value={medicine} onChange={ (e) => setMedicine(e.target.value) }  id="med" className="focus:bg-lime-50 rounded-sm py-1 px-2 text-green-500 outline-none bg-white w-full placeholder-gray-400" type="text" placeholder="Ex: Hydramoxil" />
          </div>
          <div className="w-4/12 ml-3">
            <label htmlFor="cant" className="block text-cyan-900 mb-1">Quantity</label>
            {/* <input value={cant} onChange={ (e) => setCant(e.target.value) }  id="cant" className="focus:bg-lime-50 rounded-sm py-1 px-2 text-green-500 outline-none bg-white w-full placeholder-gray-400" type="text" placeholder="Ex: 5" /> */}
            <select  value={cant} onChange={ (e) => setCant(e.target.value) }  id="cant" className="focus:bg-lime-50 rounded-sm py-1 px-2 text-green-500 outline-none bg-white w-full placeholder-gray-400">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="mb-3 flex">
          <div className="w-5/12">
            <label htmlFor="pric" className="block text-cyan-900 mb-1">Price / u</label>
            <input value={price} onChange={ (e) => setPrice(e.target.value) }  id="pric" className="focus:bg-lime-50 rounded-sm py-1 px-2 text-green-500 outline-none bg-white w-full placeholder-gray-400" type="text" placeholder="Price in €" />
          </div>
          <div className="w-7/12 ml-3">
            <label htmlFor="date" className="block text-cyan-900 mb-1">Pick up date</label>
            <input value={date} onChange={ (e) => setDate(e.target.value) }  id="date" className="focus:bg-lime-50 rounded-sm py-1 px-2 text-green-500 outline-none bg-white w-full placeholder-gray-400" type="date" placeholder="dd/mm/yy" />
          </div>
        </div>
        <div className="mb-3">
            <label htmlFor="notes" className="block text-cyan-900 mb-1">Anotations</label>
            <input value={notes} onChange={ (e) => setNotes(e.target.value) }  id="notes" className="focus:bg-lime-50 rounded-sm py-2 px-2 text-green-500 outline-none bg-white w-full placeholder-gray-400" type="text" placeholder="Disease, symptoms..." />
        </div>



       

        <div className="flex justify-center align-middle">
          <input className=" transition-all text-white font-medium bg-faded-green w-36 text-center py-2 rounded-md mt-6 cursor-pointer hover:bg-gradient-to-b from-lime-300 to-green-500" type="submit" value={order.id ? "Modify order" : "Add order"} />
        </div>

      </form>
 
    </div>

  )
}

export default Form

