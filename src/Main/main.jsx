import Product from "../Product/Product";
function Main() {
    return (
        <main className="mt-20 px-10">
            <section className="flex gap-x-4">
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
            </section>
        </main>
    );
}
export default Main