export const BottomBar = () => {
    return <div className="flex  flex-col">
        <div className="flex flex-wrap gap-6 sm:justify-between md:flex-nowrap">
            <div className="flex flex-col bg-green-100">
                <div>SHOP.CO</div>
                <div>We have clothes that suits your style and which you're proud to wear, From women to men</div>
                <div className="flex gap-4">
                    <div>X</div>
                    <div>F</div>
                    <div>I</div>
                    <div>G</div>
                </div>
            </div>


            <div className="flex flex-col gap-3 w-[110px] bg-pink-200">

                <div>
                    <div className="font-satoshi_medium text-xs tracking-widest">COMPANY</div>
                </div>

                <div className="flex flex-col font-satoshi text-xs gap-3">

                    <div>About</div>
                    <div>Features</div>
                    <div>Works</div>
                    <div>Career</div>

                </div>

            </div>
            <div className="flex flex-col font-satoshi text-xs gap-3 w-[110px]">
                <div>
                    <div className="font-satoshi_medium text-xs tracking-widest">HELP</div>

                </div>
                <div className="flex flex-col font-satoshi text-xs gap-3">
                    <div>Customer support</div>
                    <div>Delivery Details</div>
                    <div>Terms & conditons</div>
                    <div>Privacy Policy</div>

                </div>

            </div>
            <div className="flex flex-col font-satoshi text-xs gap-3 w-[110px]">

                <div>
                    <div className="font-satoshi_medium text-xs tracking-widest">FAQ</div>

                </div>

                <div className="flex flex-col font-satoshi text-xs gap-3">
                    <div>Account</div>
                    <div>Manage Deliveries</div>
                    <div>Orders</div>
                    <div>Payments</div>

                </div>

            </div>

            <div className="flex flex-col font-satoshi text-xs gap-3 w-[110px]">

                <div>
                <div className="font-satoshi_medium text-xs tracking-widest">RESOURCES</div>

                </div>               

                <div className="flex flex-col font-satoshi text-xs gap-3">
                    <div>Free ebook</div>
                    <div>Development tutorial</div>
                    <div>How to -Blog</div>
                    <div>Youtube playlist</div>

                </div>

            </div>

        </div>
        <div>hello</div>
    </div>
}