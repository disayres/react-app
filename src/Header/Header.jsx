function Header() {
    return (
        <header className="bg-gray-400 text-white py-4 px-8 border-b-4 border-black rounded-b-2xl">
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-x-2.5">
                    <img src="./images/Frame.jpg" alt="App-Logo" />
                    <span className="text-xl">Pop Rock Crystal</span>
                </div>
                <ul className="flex font-bold gap-x-12">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
                <div className="flex items-center gap-x-2.5 relative">
                    <span className="bg-red-400 rounded-full h-6 w-6 flex items-center justify-center absolute right-[15px] top-[-15px]">23</span>
                    <img className="cursor-pointer" src="./images/Vector.png" alt="Basket-Icon" />
                </div>

            </div>
        </header>
    );
}

export default Header