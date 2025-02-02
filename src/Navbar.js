const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="material-symbols-light:real-estate-agent">
                    <path id="Vector" d="M13.3021 40.7979V26.7625H17.6354C17.8257 26.7625 18.0222 26.7819 18.225 26.8208C18.4278 26.8597 18.6243 26.9139 18.8146 26.9833L31.3583 31.5875C31.9778 31.8139 32.4889 32.1861 32.8917 32.7042C33.2931 33.2222 33.4937 33.8049 33.4937 34.4521C33.4937 34.834 33.3687 35.1438 33.1187 35.3813C32.8687 35.6188 32.5611 35.7368 32.1958 35.7354H29.6917C28.9833 35.7354 28.2924 35.6938 27.6187 35.6104C26.9451 35.5271 26.2847 35.3701 25.6375 35.1396L21.9042 33.7979L21.3062 35.3479L25.3979 36.7542C26.0535 36.9764 26.7312 37.1292 27.4312 37.2125C28.1312 37.2972 28.8403 37.3396 29.5583 37.3396H40.3042C41.2556 37.3396 42.0681 37.6521 42.7417 38.2771C43.4153 38.9021 43.7514 39.6847 43.75 40.625L29.1792 45.4333L13.3021 40.7979ZM4.96875 43.75V26.7625H11.2188V43.75H4.96875ZM29.3667 17.5875H31.05V15.9042H29.3667V17.5875ZM25.2 17.5875H26.8833V15.9042H25.2V17.5875ZM29.3667 21.7542H31.05V20.0708H29.3667V21.7542ZM25.2 21.7542H26.8833V20.0708H25.2V21.7542ZM35.0292 30.7688C34.7028 29.9438 34.1819 29.2042 33.4667 28.55C32.75 27.8958 31.7986 27.3521 30.6125 26.9188L16.6667 21.7938H14.5833V15.1875L28.125 5.53125L41.6667 15.1854V30.7688H35.0292Z" fill="#FFD700"/>
                    </g>
                </svg>

                <h1>MANYEH</h1>
            </div>
            <div className="details">
                <div className="link">
                    <a href="/" className="links l-active">Home</a>
                    <a href="/" className="links drop">
                    <p>Products</p>
                    <span>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="ri:arrow-drop-down-line">
                            <path id="Vector" d="M11.757 17.344L7.757 11.344L9.09097 9.34399L11.757 13.344L14.423 9.34399L15.757 11.344L11.757 17.344Z" fill="#E2F6F8"/>
                            </g>
                        </svg>

                    </span>
                    </a>
                    <a href="/" className="links drop">
                    <p>Services</p>
                    <span>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="ri:arrow-drop-down-line">
                            <path id="Vector" d="M11.757 17.344L7.757 11.344L9.09097 9.34399L11.757 13.344L14.423 9.34399L15.757 11.344L11.757 17.344Z" fill="#E2F6F8"/>
                            </g>
                        </svg>

                    </span>
                    </a>
                    <a href="/" className="links">Contacts</a>
                </div>
                <div className="btn">
                    <a href="/" className="button"><p>Log-in</p></a>
                    <a href="/" className="button"><p>Sign-up</p></a>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;