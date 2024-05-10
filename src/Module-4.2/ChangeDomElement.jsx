import { Fragment } from "react"
import {useRef} from "react"

export default function ChangeDomElement() {

    const scrollRef=useRef(null)

    function handleScrollTop(){
        scrollRef.current.scrollIntoView()
    }

    return (
        <Fragment>

            <p
            ref={scrollRef}
            className="text-center" >Hello World!</p>

            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae excepturi veniam sunt iste, quia cum deleniti neque beatae numquam autem aperiam fugiat nam. Fugiat iusto quis commodi laborum, accusamus libero deserunt recusandae similique facilis consectetur optio illum cumque accusantium. Quod numquam assumenda nostrum nisi delectus asperiores quasi accusantium provident et maxime nesciunt ipsam accusamus atque, culpa soluta ex? Excepturi quia doloribus exercitationem odit aspernatur laboriosam officia impedit laborum assumenda voluptas, ut aliquid, voluptatibus maiores nemo distinctio soluta cum porro culpa perferendis. Quia quas facere asperiores dolorem reiciendis accusamus itaque veniam consectetur repudiandae placeat possimus odit repellendus voluptatibus repellat recusandae, ducimus assumenda sit facilis a ad unde? Excepturi debitis, tenetur adipisci impedit dicta eligendi est fugit fugiat odit soluta harum earum atque odio ab, dignissimos nostrum voluptate modi nulla molestiae, explicabo dolorum. Sit, esse? Perferendis atque minima ullam, voluptas sit nobis vero commodi repellendus deleniti porro quis corrupti in aliquid iure aperiam, distinctio inventore et asperiores? Incidunt ea quis harum a ullam, possimus officia nihil amet aliquid nostrum magnam, delectus nesciunt sed! Tempore consectetur consequatur quasi amet quam eligendi laborum! Mollitia laboriosam consequuntur qui ut vitae quas sunt sequi, ipsa odio magnam, laudantium aspernatur magni? Ipsa, explicabo fugiat officia beatae iusto necessitatibus facere sunt nesciunt, aut ducimus cumque dolorum aperiam praesentium hic? Perspiciatis, voluptatibus temporibus impedit quae dolorem quisquam! Dolores quo perspiciatis, explicabo laborum, quibusdam perferendis cumque recusandae velit, pariatur eum earum. Porro assumenda minima, labore odio distinctio natus minus! Porro eligendi magnam eaque voluptatem maxime accusantium quam non reprehenderit minus, impedit, obcaecati voluptates. Inventore accusamus magnam molestias, obcaecati, minus facilis cupiditate delectus a aut, ad similique? Nobis consequatur consectetur officiis iste voluptate repellat aut ipsam suscipit nemo porro! Odit quod eius fugit quidem sit nam ipsam voluptate provident quos? Aut, soluta consequuntur temporibus nesciunt, debitis autem iste repellendus perspiciatis rem suscipit est animi magnam quae omnis dolore nihil ducimus qui veritatis repellat quia nostrum? Quis eligendi voluptates, beatae, id alias facere deleniti vel sequi, error tempore aperiam! Perspiciatis ad, numquam impedit dolorem voluptate at voluptatibus eos quas eveniet! Commodi ratione eum totam iusto vel, ad expedita, porro beatae quibusdam dignissimos esse fugiat corporis nostrum voluptate eaque architecto impedit voluptates! Dolorum ab asperiores cupiditate blanditiis iure nam voluptate, laudantium mollitia voluptatem nihil recusandae nobis sequi culpa tempore fugit a, eius, veniam alias perferendis. Architecto labore est minima ipsa, delectus eius debitis ad quasi atque modi repellendus nemo ullam saepe, voluptatibus quaerat nihil voluptate quae. Veritatis quisquam placeat magni sit eos. Necessitatibus, quas obcaecati mollitia sit culpa sint animi iusto recusandae reprehenderit reiciendis tempora unde vero velit ipsam, tenetur ipsa ratione at ducimus repellat! Quod sequi ratione numquam necessitatibus. Laboriosam magni aut perspiciatis illo in ipsam ex tempora aliquid praesentium totam quia alias, quis facilis, adipisci recusandae accusantium? Corporis nobis est optio vitae tempora fugit reprehenderit asperiores sint, voluptatem perferendis. At, odio. Hic nisi vitae quod perspiciatis vel ut veniam animi maxime est sunt assumenda, eaque sit cum? Minus, excepturi sapiente ullam, qui praesentium molestiae error quod quisquam laboriosam nostrum minima!
                </p>
            </div>

            <div className="text-right" >
            <button 
            onClick={handleScrollTop}
            className="text-white bg-blue-500 px-3 py-2 rounded-md" >
                Scroll to Div
            </button>
            </div>

        </Fragment>
    )
}