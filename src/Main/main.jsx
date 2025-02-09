import Product from "../Product/Product";
function Main() {
    return (
        <main className="mt-20 px-10">
            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                        <Product
                            title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
                            price="799"
                            rate="4.3"
                            img="./images/apple-watch.png"
                        />
                        <Product
                            title="apple iphone series 15ProMax , titanuim color full glass seramic"
                            price="1200"
                            rate="5.0"
                            img="./images/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
                        />
                        <Product
                            title="Apple Watch Series 5 GPS"
                            price="499"
                            rate="4.0"
                            img="./images/apple-watch.png"
                        />
                        <Product
                            title="apple iphone 13Pro"
                            price="399"
                            rate="4.5"
                            img="./images/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Main