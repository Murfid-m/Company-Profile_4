export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Empat Coffee and Space</h3>
            <p className="text-gray-300">
              Ruang komunitas nyaman dengan kopi berkualitas tinggi dan suasana yang ramah.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <p className="text-gray-300">
              Monday - Friday: 8:00 AM - 12:00 PM<br />
              Saturday - Sunday: 8:00 AM - 12:00 PM
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              📍 Cilegon <br />
              📞 +62 8213-7892-1717<br />
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-300">
          <p>&copy; {currentYear} Empat Coffee and Space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
