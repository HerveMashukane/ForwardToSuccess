 export default function Footer(){
    return(
        <div>
            {/* FOOTER */}
            <footer className="px-6 md:px-16 py-10 bg-gray-900 text-gray-400">
                <div className="grid md:grid-cols-4 gap-8">

                    <div>
                        <h3 className="text-white text-heading3 mb-4">ForwardToSuccess</h3>
                        <p className="flex flex-col text-small">
                            Push Forward
                        <span className="text-xs">Empowering students with language and technology skills.</span>
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>Home</li>
                            <li>Courses</li>
                            <li>Team</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-3">
                            Our Social Media
                        </h4>
                        <ul className="flex space-x-4">
                            <li className="flex flex-col items-center">
                                facebook
                                <span><i className="bi bi-facebook text-3xl text-brand-secondary ;"></i></span>
                            </li>
                            <li className="flex flex-col items-center">
                                whatsapp
                                <span><i className="bi bi-whatsapp text-3xl text-green-700"></i></span>
                            </li>
                            <li className="flex flex-col items-center">
                                tiktok
                                <span><i className="bi bi-tiktok text-3xl text-gray-300"></i></span>
                            </li>
                            <li className="flex flex-col items-center">
                                yutube
                                <span><i className="bi bi-youtube text-3xl text-brand-primary"></i></span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-3">Contact</h4>
                        <p>Email: forwardtosuccess@gmail.com</p>
                        <p>Phone: +243 985 219 157</p>
                    </div>
                </div>

                <div className="text-center mt-10 text-small">
                    &copy;{new Date().getFullYear()}. Made with 
                    <span>
                        <i className="bi bi-heart-fill text-brand-primary"></i>
                    </span> by Hervé Mashukane. All rights reserved.
                </div>
            </footer>
        </div>
    )
 }