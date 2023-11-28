function Header() {



    return(
        <div className="flex justify-center w-max p-12 align-middle">
            <img className="w-24 h-20" src="/med.png" alt="" />
            <div className="text-stone-800">
                <div className="flex md:mt-2">
                    <p className="text-4xl font-thin text-cyan-900 ml-5">MED</p>
                    <p className="text-4xl font-semibold text-cyan-900 ml-2">HEMP</p>
                </div>
                <p className="text-xl font-thin text-cyan-900 ml-5">Masters in 100% natural medicines</p>
            </div>
        </div>
    )
}

export default Header;