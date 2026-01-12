

export const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-gray-100 text-gray-600 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">

          {/* Logo */}
          <h2 className="font-serif font-bold text-3xl text-gray-900 tracking-tight">V.K.</h2>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-primary transition-colors font-medium text-sm tracking-wide lowercase first-letter:uppercase">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-6 flex-wrap justify-center">
            {/* Github */}
            <a
              href="https://github.com/Vignesh58728"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <img src="https://cdn.simpleicons.org/github/white" alt="Github" className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vigneshwaran-m-442673254/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#0A66C2]/10 rounded-full transition-colors"
            >
              <svg role="img" viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Upwork */}
            <a
              href="#" // User to provide link
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#14A800]/10 rounded-full transition-colors"
              title="Upwork"
            >
              <img src="https://cdn.simpleicons.org/upwork/14A800" alt="Upwork" className="w-5 h-5" />
            </a>

            {/* Fiverr */}
            <a
              href="#" // User to provide link
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#1DBF73]/10 rounded-full transition-colors"
              title="Fiverr"
            >
              <img src="https://cdn.simpleicons.org/fiverr/1DBF73" alt="Fiverr" className="w-5 h-5" />
            </a>

            {/* Freelancer */}
            <a
              href="#" // User to provide link
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#29B2FE]/10 rounded-full transition-colors"
              title="Freelancer"
            >
              <img src="https://cdn.simpleicons.org/freelancer/29B2FE" alt="Freelancer" className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1H2jCyT3Ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#1877F2]/10 rounded-full transition-colors"
            >
              <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/itz_vicky_5_?igsh=MW4wMmV0Z3g4YmI0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#E4405F]/10 rounded-full transition-colors"
            >
              <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-5 h-5" />
            </a>

            {/* Youtube */}
            <a
              href="https://youtube.com/@vicky_editz?si=PeId_4KpQe3C9qAZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#FF0000]/10 rounded-full transition-colors"
            >
              <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="Youtube" className="w-5 h-5" />
            </a>

            {/* Mail (Yahoo) */}
            <a href="mailto:saivigneshas@yahoo.com" className="p-2 hover:bg-[#6001D2]/10 rounded-full transition-colors">
              <svg role="img" viewBox="0 0 24 24" fill="#6001D2" className="w-5 h-5">
                <title>Yahoo</title>
                <path d="M16.92 5.035c-.482-.249-1.284-.45-2.074.136l-3.791 5.093-3.78-5.122c-.672-.518-1.559-.364-1.928.094-.37.458-.125 1.45.378 2.05L10.33 13.9 10.33 21h3.34v-7.1l4.606-6.645c.421-.522.618-1.425-1.356-2.22z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-100 w-full max-w-lg">
            <p className="font-sans text-sm text-gray-400">
              © {new Date().getFullYear()} Vigneshwaran M. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
