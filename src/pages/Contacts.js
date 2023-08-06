const Contacts = () => {
    return ( 
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Tbilisi, Georgia</p>
                    </li>
                    <li className="content-list__item">
                        <p><a href="">+(995) 551-11-8630 </a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="https://mail.google.com" target={"_blank"}>nikalomiashvili25@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>

     );
}
 
export default Contacts;