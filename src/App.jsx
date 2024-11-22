import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {


    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button functionText="to the collection" disabled={false}/>
                <Button functionText="shop all bags" disabled={false}/>
                <Button functionText="pre-orders" disabled={true}/>

                {/*<button type="button" onClick={()=>logButton("to the collection")}>to the collection</button>*/}
                {/*<button type="button" onClick={()=>logButton("shop all bags")}>shop all bags</button>*/}
                {/*<button type="button" onClick={()=>logButton("pre-orders")} disabled>pre-orders</button>*/}
            </nav>
            <main>
                <Product
                    spanText="Best seller"
                    imageSource="../src/assets/bag_1.png"
                    imageAlt="photo of the handy bag"
                    productName="The handy bag"
                    price={400}
                />
                <Product
                    spanText="Best seller"
                    imageSource="../src/assets/bag_2.png"
                    imageAlt="photo of the stylish bag"
                    productName="The stylish bag"
                    price={250}
                />
                <Product
                    spanText="New collection"
                    imageSource="../src/assets/bag_3.png"
                    imageAlt="photo of the simple bag"
                    productName="The simple bag"
                    price={300}
                />
                <Product
                    spanText="New collection"
                    imageSource="../src/assets/bag_4.png"
                    imageAlt="photo of trendy bag"
                    productName="The trendy bag"
                    price={150}
                />

                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src="../src/assets/bag_1.png" alt="photo of the handy bag"/>*/}
                {/*    <p>The handy bag</p>*/}
                {/*    <h4>€400,-</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src="../src/assets/bag_2.png" alt="photo of the stylish bag"/>*/}
                {/*    <p>The stylish bag</p>*/}
                {/*    <h4>€250,-</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>New collection</span>*/}
                {/*    <img src="../src/assets/bag_3.png" alt="photo of the simple bag"/>*/}
                {/*    <p>The simple bag</p>*/}
                {/*    <h4>€300,-</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>New collection</span>*/}
                {/*    <img src="../src/assets/bag_4.png" alt="photo of the trendy bag"/>*/}
                {/*    <p>The trendy bag</p>*/}
                {/*    <h4>€150,-</h4>*/}
                {/*</article>*/}
            </main>
            <footer>
                <Tile
                    containsImage={false}
                    tileHeading="The brand"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa deserunt ex inventore iste mollitia non provident quae reiciendis voluptates?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus fugit illum inventore officia placeat quis sed similique totam vitae.</p>
                </Tile>
                <Tile
                    containsImage={true}
                    imageSource="../src/assets/brand.png"
                    imageAlt="photo of brand"
                />
                <Tile
                    containsImage={true}
                    imageSource="../src/assets/our_story.png"
                    imageAlt="photo of designers"
                />
                <Tile
                    containsImage={false}
                    tileHeading="Our story"
                >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi earum optio pariatur quaerat voluptates. Adipisci atque consequatur, cupiditate dolor excepturi laboriosam maxime natus neque nesciunt, saepe temporibus ut! Tempora, velit?</p>
                </Tile>


                {/*<section>*/}
                {/*    <h2>The brand</h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur ducimus incidunt labore quod similique vero voluptate? Expedita fugit, tempora.</p>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor dolorem esse exercitationem hic in magnam nobis quibusdam sed totam!</p>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src="../src/assets/brand.png" alt="photo of brand"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src="../src/assets/our_story.png" alt="photo of designers"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <h2>Our story</h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda cumque distinctio dolores hic ipsa iusto praesentium quo, voluptatibus. Ex officiis pariatur repellendus repudiandae, sed soluta vel. Pariatur, qui recusandae!</p>*/}
                {/*</section>*/}
            </footer>
        </>
    )
}

export default App
