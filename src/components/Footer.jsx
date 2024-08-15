import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollToTopOrNavigate = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <footer className="sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 bg-[#191a1d00] antialiased  border-t-2 border-[#1c1f26]">
            <p className="mb-4 text-sm text-center text-gray-400 sm:mb-0">
                &copy; 2024 <span 
                    onClick={handleScrollToTopOrNavigate} 
                    className="hover:underline cursor-pointer">
                    BlogByIce
                </span>. All rights reserved.
            </p>
            <div className="flex justify-center items-center space-x-1">
                <a 
                    href="https://github.com/iceXshadow"
                    className="inline-flex justify-center p-2 rounded-lg cursor-pointer text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:text-white dark:hover:bg-[#454547] filter backdrop-blur-md"
                >
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Github</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;